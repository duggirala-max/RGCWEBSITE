import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    console.log("[Landing Page Lead] Brochure download submitted:", data);

    // Standard 303 See Other redirect to welcome page
    const redirectUrl = new URL("/euphoria-landing/welcome.html", request.url);
    return NextResponse.redirect(redirectUrl, { status: 303 });
  } catch (error) {
    console.error("[Landing Page Lead] Error processing brochure request:", error);
    const fallbackUrl = new URL("/euphoria-landing/welcome.html", request.url);
    return NextResponse.redirect(fallbackUrl, { status: 303 });
  }
}
