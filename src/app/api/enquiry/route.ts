import { NextRequest, NextResponse } from "next/server";

const RECIPIENTS = [
  "aftab@shaswadimension.com",
  "feedback@shaswadimension.com",
  "sdthakur399@gmail.com",
];

const SUBJECT = "Lead from Euphoria - Landing Page || Enquiry Now";

const RESEND_API_KEY =
  process.env.RESEND_API_KEY || "re_eaR9x3Re_DQTaCP4dZLetsTQEddGFDdLv";
const EMAIL_FROM =
  process.env.EMAIL_FROM || "Euphoria Website <website@rgconstructions.in>";

export async function POST(request: NextRequest) {
  try {
    let data: Record<string, any> = {};
    const contentType = request.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      data = await request.json();
    } else {
      const formData = await request.formData();
      formData.forEach((value, key) => {
        data[key] = value.toString();
      });
    }

    const isBrochure =
      String(data.bname || "").trim() !== "" || data.form_type === "brochure";

    const name = String(isBrochure ? data.bname : data.ename || "").trim();
    const email = String(isBrochure ? data.bemail : data.eemail || "").trim();
    const phone = String(isBrochure ? data.bphone : data.ephone || "").trim();
    const budget = String(isBrochure ? data.bbudget : data.ebudget || "").trim();
    const formName = String(
      data.form_name || (isBrochure ? "Brochure Form" : "Enquiry Form")
    ).trim();
    const placement = String(
      data.placement || (isBrochure ? "Download Brochure Form" : "Enquire Form")
    ).trim();

    // Validation
    if (
      !name ||
      !/^[A-Za-z ]+$/.test(name) ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !/^[6-9]\d{9}$/.test(phone) ||
      !["2 BHK", "3 BHK"].includes(budget)
    ) {
      if (!contentType.includes("application/json")) {
        return NextResponse.redirect(
          new URL("/euphoria-landing/thankyou.html", request.url),
          { status: 303 }
        );
      }
      return NextResponse.json(
        { success: false, message: "Please check your form details." },
        { status: 400 }
      );
    }

    const fields: [string, string][] = [
      ["Form Name", formName],
      ["Name", name],
      ["Phone", phone],
      ["Email", email],
      ["Residences Type", budget],
      ["Project", data.project || "Euphoria"],
      ["Source", data.source || "Web Enquiry"],
      ["Channel", data.channel || "Shaswa Dimension"],
      ["Placement", placement],
      ["UTM Source", data.utm_source || "-"],
      ["UTM Medium", data.utm_medium || "-"],
      ["UTM Campaign", data.utm_campaign || "-"],
      ["UTM Term", data.utm_term || "-"],
      ["UTM Content", data.utm_content || "-"],
      [
        "Submitted At",
        new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      ],
    ];

    const escapeHtml = (value: string) =>
      String(value ?? "-").replace(
        /[&<>"']/g,
        (char) =>
          ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
          }[char] || char)
      );

    const html = `
      <h2>New Euphoria Enquiry</h2>
      <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;">
        ${fields
          .map(
            ([label, val]) => `
          <tr>
            <td><strong>${escapeHtml(label)}</strong></td>
            <td>${escapeHtml(val)}</td>
          </tr>
        `
          )
          .join("")}
      </table>
    `;

    const textBody = fields.map(([label, val]) => `${label}: ${val}`).join("\n");

    console.log("[Landing Page Lead] Submitting to Resend:", {
      name,
      phone,
      email,
      budget,
      formName,
    });

    if (RESEND_API_KEY) {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: EMAIL_FROM,
          to: RECIPIENTS,
          reply_to: email,
          subject: SUBJECT,
          html,
          text: textBody,
        }),
      });

      const resendResult = await resendRes.json();
      console.log("[Landing Page Lead] Resend response:", resendResult);
    }

    if (!contentType.includes("application/json")) {
      return NextResponse.redirect(
        new URL("/euphoria-landing/thankyou.html", request.url),
        { status: 303 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully.",
    });
  } catch (error: any) {
    console.error("[Landing Page Lead] Submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || "An unexpected error occurred.",
      },
      { status: 500 }
    );
  }
}
