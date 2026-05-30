import fitz
import io
from PIL import Image

# 1. Extract images from PDF
pdf_document = "Euphoria Brochure.pdf"
pdf = fitz.open(pdf_document)
image_count = 0
for i in range(len(pdf)):
    page = pdf[i]
    image_list = page.get_images(full=True)
    for image_index, img in enumerate(image_list, start=1):
        xref = img[0]
        base_image = pdf.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        try:
            image = Image.open(io.BytesIO(image_bytes))
            # Save only high-res images suitable for hero/backgrounds
            if image.width >= 600 and image.height >= 400:
                image_name = f"public/assets/project_image_{image_count}.{image_ext}"
                image.save(image_name)
                print(f"Saved {image_name}")
                image_count += 1
        except Exception as e:
            pass

# 2. Fix the logo.png
try:
    logo = Image.open("public/logo.png")
    # Rotate slightly to fix the photo angle
    rotated = logo.rotate(13.5, resample=Image.Resampling.BICUBIC, expand=True, fillcolor="white")
    
    # Auto-crop the white borders
    bg = Image.new(rotated.mode, rotated.size, rotated.getpixel((0,0)))
    diff = Image.composite(rotated, bg, rotated) # diff is a bit tricky, let's just save rotated
    
    # Actually, crop 5% from edges to remove any edge artifacts
    width, height = rotated.size
    left = int(width * 0.05)
    top = int(height * 0.05)
    right = int(width * 0.95)
    bottom = int(height * 0.95)
    rotated = rotated.crop((left, top, right, bottom))

    rotated.save("public/logo.png")
    print("Fixed logo tilt and extracted PDF images.")
except Exception as e:
    print("Error processing logo:", e)
