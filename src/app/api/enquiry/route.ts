import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    console.log("[Landing Page Lead] Enquiry submitted:", data);

    // Standard 303 See Other redirect to thankyou page
    const redirectUrl = new URL("/euphoria-landing/thankyou.html", request.url);
    return NextResponse.redirect(redirectUrl, { status: 303 });
  } catch (error) {
    console.error("[Landing Page Lead] Error processing enquiry:", error);
    const fallbackUrl = new URL("/euphoria-landing/thankyou.html", request.url);
    return NextResponse.redirect(fallbackUrl, { status: 303 });
  }
}
