const RECIPIENTS = [
    "aftab@shaswadimension.com",
    "feedback@shaswadimension.com",
    "sdthakur399@gmail.com"
];

const SUBJECT = "Lead from Euphoria - Landing Page || Enquiry Now";

const DEFAULT_RESEND_KEY = "re_eaR9x3Re_DQTaCP4dZLetsTQEddGFDdLv";
const DEFAULT_EMAIL_FROM = "Euphoria Website <website@rgconstructions.in>";

export default async (request) => {
    if (request.method !== "POST") {
        return jsonResponse(405, {
            success: false,
            message: "Method not allowed."
        });
    }

    try {
        const data = await request.json();

        const isBrochure =
            String(data.bname || "").trim() !== "" ||
            data.form_type === "brochure";

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

        if (
            !name ||
            !/^[A-Za-z ]+$/.test(name) ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
            !/^[6-9]\d{9}$/.test(phone) ||
            !["2 BHK", "3 BHK"].includes(budget)
        ) {
            return jsonResponse(400, {
                success: false,
                message: "Please check your form details."
            });
        }

        const fields = [
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
                new Date().toLocaleString("en-IN", {
                    timeZone: "Asia/Kolkata"
                })
            ]
        ];

        const escapeHtml = (value) =>
            String(value ?? "-").replace(/[&<>"']/g, (char) => ({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            })[char]);

        const html = `
            <h2>New Euphoria Enquiry</h2>
            <table cellpadding="8" cellspacing="0"
                   border="1" style="border-collapse:collapse;">
                ${fields.map(([label, value]) => `
                    <tr>
                        <td><strong>${escapeHtml(label)}</strong></td>
                        <td>${escapeHtml(value)}</td>
                    </tr>
                `).join("")}
            </table>
        `;

        const textBody = fields
            .map(([label, value]) => `${label}: ${value || "-"}`)
            .join("\n");

        const apiKey = process.env.RESEND_API_KEY || DEFAULT_RESEND_KEY;
        const from = process.env.EMAIL_FROM || DEFAULT_EMAIL_FROM;

        console.log("[Netlify Function] Submitting lead:", {
            name,
            phone,
            email,
            budget,
            formName
        });

        if (apiKey) {
            const response = await fetch("https://api.resend.com/emails", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    from,
                    to: RECIPIENTS,
                    reply_to: email,
                    subject: SUBJECT,
                    html,
                    text: textBody
                })
            });

            const result = await response.json();
            console.log("[Netlify Function] Resend response:", result);
        }

        return jsonResponse(200, {
            success: true,
            message: "Enquiry submitted successfully."
        });

    } catch (error) {
        console.error("Enquiry function failed:", error.message);

        return jsonResponse(500, {
            success: false,
            message: "An unexpected error occurred."
        });
    }
};

function jsonResponse(status, body) {
    return new Response(JSON.stringify(body), {
        status,
        headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-store"
        }
    });
}
