/**
 * Varuta Pharma - Clean & Professional Doctor Email Template
 * Free of complex jargon, direct, respectful, and formatted with the official logo.
 */

const getDoctorDossierEmail = ({
  doctorName,
  productTitle,
  fileName,
  fileUrl,
  clientUrl = 'https://varutapharmaceuticals.com'
}) => {
  const fullDocumentUrl = fileUrl.startsWith('http')
    ? fileUrl
    : `${clientUrl.replace(/\/$/, '')}${fileUrl.startsWith('/') ? '' : '/'}${fileUrl}`;

  // Hosted logo fallback
  const logoUrl = `${clientUrl.replace(/\/$/, '')}/logo-email.png`;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Clinical Dossier - ${productTitle} | Varuta Pharma</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; color: #1e293b; line-height: 1.6;">

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8fafc; padding: 30px 12px;">
    <tr>
      <td align="center">
        
        <!-- Main Card Container -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 580px; background-color: #ffffff; border-radius: 14px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);">
          
          <!-- OFFICIAL LOGO HEADER -->
          <tr>
            <td align="center" style="padding: 28px 32px 22px 32px; background-color: #ffffff; border-bottom: 2px solid #0b835c;">
              <img src="cid:varuta-logo" alt="Varuta Pharma - Born for Generations..." width="250" style="width: 250px; max-width: 100%; height: auto; display: block; margin: 0 auto;" onerror="this.onerror=null; this.src='${logoUrl}';" />
            </td>
          </tr>

          <!-- MAIN CONTENT BODY -->
          <tr>
            <td style="padding: 32px 32px 24px 32px;">
              
              <h2 style="margin: 0 0 16px 0; font-size: 20px; font-weight: 700; color: #0f172a;">
                Dear Dr. ${doctorName},
              </h2>

              <p style="margin: 0 0 16px 0; font-size: 15px; color: #334155;">
                Thank you for your interest in <strong>Varuta Pharma</strong>. As requested, we are sharing the clinical document for <strong>${productTitle}</strong>.
              </p>

              <!-- ATTACHMENT NOTIFICATION CARD -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; margin: 20px 0 24px 0;">
                <tr>
                  <td style="padding: 18px 20px;">
                    <span style="display: inline-block; background-color: #0b835c; color: #ffffff; font-size: 11px; font-weight: 700; letter-spacing: 0.5px; padding: 3px 8px; border-radius: 4px; text-transform: uppercase; margin-bottom: 8px;">
                      &check; Document Attached
                    </span>
                    <h3 style="margin: 4px 0 6px 0; font-size: 17px; font-weight: 700; color: #064e3b;">
                      ${productTitle}
                    </h3>
                    <p style="margin: 0 0 14px 0; font-size: 13px; color: #047857;">
                      File: <strong>${fileName}</strong> (attached to this email)
                    </p>
                    
                    <!-- Direct View Button -->
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="background-color: #0b835c; border-radius: 6px; text-align: center;">
                          <a href="${fullDocumentUrl}" target="_blank" style="display: inline-block; padding: 10px 20px; color: #ffffff; text-decoration: none; font-size: 13.5px; font-weight: 600;">
                            View Clinical Dossier Online &rarr;
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- SIMPLE COMPANY HIGHLIGHTS -->
              <h4 style="margin: 24px 0 12px 0; font-size: 14px; font-weight: 700; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px;">
                About Varuta Pharma:
              </h4>
              <p style="margin: 0 0 12px 0; font-size: 14px; color: #475569;">
                We are an Indian pharmaceutical and healthcare company dedicated to delivering high-quality, trusted formulations. All our products are produced in <strong>WHO-GMP certified facilities</strong> following strict quality standards.
              </p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8fafc; border-radius: 8px; padding: 14px 18px; margin-bottom: 24px;">
                <tr>
                  <td style="font-size: 13.5px; color: #334155; line-height: 1.8;">
                    &bull; Women&rsquo;s Healthcare &amp; Fertility Support<br>
                    &bull; Metabolic &amp; Lifestyle Management<br>
                    &bull; Cellular Longevity &amp; Vitality<br>
                    &bull; Sleep Health &amp; Neurological Well-being
                  </td>
                </tr>
              </table>

              <!-- SAMPLES PROPOSAL BOX -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8fafc; border-left: 3px solid #0b835c; border-radius: 0 8px 8px 0; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 14px 18px;">
                    <strong style="color: #0b835c; font-size: 14px;">Complimentary Physician Samples for Your Clinic:</strong>
                    <p style="margin: 6px 0 8px 0; font-size: 13px; color: #475569;">
                      If you would like to evaluate <strong>${productTitle}</strong> in your clinical practice, our team will be pleased to deliver complimentary physician sample kits directly to your clinic or hospital desk.
                    </p>
                    <a href="mailto:admin@varutapharmaceuticals.com?subject=Sample%20Request%20-%20Dr.%20${encodeURIComponent(doctorName)}%20(${encodeURIComponent(productTitle)})" style="color: #0b835c; font-weight: 700; font-size: 13px; text-decoration: underline;">
                      &rarr; Reply to request samples for your clinic
                    </a>
                  </td>
                </tr>
              </table>

              <!-- WARM PROFESSIONAL SIGN-OFF -->
              <p style="margin: 0 0 4px 0; font-size: 14px; color: #334155;">
                Thank you for your time and trust.
              </p>
              <p style="margin: 0 0 2px 0; font-size: 15px; font-weight: 700; color: #0f172a;">
                Varuta Pharma Pvt. Ltd.
              </p>
              <p style="margin: 0; font-size: 12.5px; color: #0b835c; font-style: italic;">
                Born for Generations...
              </p>

            </td>
          </tr>

          <!-- CLEAN FOOTER -->
          <tr>
            <td style="background-color: #0f172a; padding: 22px 32px; text-align: left;">
              <p style="margin: 0 0 6px 0; font-size: 12px; font-weight: 700; color: #ffffff;">
                VARUTA PHARMA PVT. LTD.
              </p>
              <p style="margin: 0 0 10px 0; font-size: 11px; color: #94a3b8; line-height: 1.5;">
                <strong>Offices:</strong> Pune (Maharashtra) &bull; Hyderabad (Telangana) &bull; Melbourne (Australia)<br>
                <strong>License:</strong> FSSAI Marketer Lic. No. 13624999000034
              </p>
              <p style="margin: 0; font-size: 10.5px; color: #64748b; line-height: 1.4; border-top: 1px solid #1e293b; padding-top: 8px;">
                This communication is intended for registered healthcare practitioners. If you received this in error, please disregard.
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
  `.trim();
};

const getAdminNotificationEmail = ({
  doctor,
  productTitle,
  fileName,
  fileUrl,
  clientUrl = 'https://varutapharmaceuticals.com',
  downloadedAt = new Date()
}) => {
  const fullDocumentUrl = fileUrl.startsWith('http')
    ? fileUrl
    : `${clientUrl.replace(/\/$/, '')}${fileUrl.startsWith('/') ? '' : '/'}${fileUrl}`;

  const formattedDate = new Intl.DateTimeFormat('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Asia/Kolkata'
  }).format(downloadedAt);

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Doctor Dossier Download - Dr. ${doctor.fullName}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; color: #0f172a;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="padding: 24px 10px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 580px; background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;">
          
          <tr>
            <td style="background-color: #0b835c; padding: 16px 24px;">
              <h2 style="margin: 0; color: #ffffff; font-size: 17px; font-weight: 700;">
                New Doctor Dossier Download
              </h2>
              <p style="margin: 4px 0 0 0; color: #d1fae5; font-size: 12px;">
                ${formattedDate} IST
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding: 24px;">
              <table role="presentation" width="100%" cellpadding="6" cellspacing="0" border="0" style="font-size: 13.5px;">
                <tr>
                  <td width="35%" style="color: #64748b; font-weight: 600;">Doctor Name:</td>
                  <td style="color: #0f172a; font-weight: 700;">Dr. ${doctor.fullName}</td>
                </tr>
                <tr style="background-color: #f8fafc;">
                  <td style="color: #64748b; font-weight: 600;">Specialization:</td>
                  <td style="color: #0b835c; font-weight: 700;">${doctor.specialization}</td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 600;">Email:</td>
                  <td><a href="mailto:${doctor.email}" style="color: #2563eb; text-decoration: none;">${doctor.email}</a></td>
                </tr>
                <tr style="background-color: #f8fafc;">
                  <td style="color: #64748b; font-weight: 600;">Phone:</td>
                  <td><a href="tel:${doctor.phone}" style="color: #2563eb; text-decoration: none;">${doctor.phone}</a></td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 600;">Clinic / Address:</td>
                  <td style="color: #334155;">${doctor.address}</td>
                </tr>
                <tr style="background-color: #f8fafc;">
                  <td style="color: #64748b; font-weight: 600;">Product:</td>
                  <td style="color: #0f172a; font-weight: 700;">${productTitle}</td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 600;">Document:</td>
                  <td style="color: #334155; font-family: monospace;">${fileName}</td>
                </tr>
              </table>

              <div style="margin-top: 20px;">
                <a href="mailto:${doctor.email}?subject=Varuta%20Pharma%20Follow-up%20-%20${encodeURIComponent(productTitle)}" style="display: inline-block; background-color: #0b835c; color: #ffffff; padding: 10px 18px; border-radius: 6px; text-decoration: none; font-size: 13px; font-weight: 600; margin-right: 10px;">
                  Reply to Doctor
                </a>
                <a href="${fullDocumentUrl}" target="_blank" style="display: inline-block; background-color: #f1f5f9; color: #334155; border: 1px solid #cbd5e1; padding: 10px 18px; border-radius: 6px; text-decoration: none; font-size: 13px; font-weight: 600;">
                  View Document
                </a>
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
};

module.exports = {
  getDoctorDossierEmail,
  getAdminNotificationEmail
};
