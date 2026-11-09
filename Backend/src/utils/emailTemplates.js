/**
 * Varuta Pharma - Clinical Email Templates
 * Designed for physicians, healthcare professionals (HCPs), and executive administration.
 * Adheres to responsive email standards (inline styles, cross-client compatibility).
 */

const getDoctorDossierEmail = ({
  doctorName,
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
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Clinical Dossier - ${productTitle} | Varuta Pharma</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td {font-family: Arial, Helvetica, sans-serif !important;}
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; -webkit-font-smoothing: antialiased;">

  <!-- Outer Canvas Table -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f1f5f9; padding: 30px 10px;">
    <tr>
      <td align="center">
        
        <!-- Main Container Card (640px Max Width) -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 640px; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(11, 131, 92, 0.08); border: 1px solid #e2e8f0;">
          
          <!-- BRAND HERO HEADER -->
          <tr>
            <td style="background: linear-gradient(135deg, #044e36 0%, #0b835c 60%, #10b981 100%); padding: 40px 36px 36px 36px; text-align: left; border-bottom: 3px solid #d97706;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <!-- Sanskrit Etymology Badge -->
                    <div style="display: inline-block; background-color: rgba(255, 255, 255, 0.15); border: 1px solid rgba(255, 255, 255, 0.3); border-radius: 50px; padding: 4px 14px; margin-bottom: 16px;">
                      <span style="color: #fef08a; font-size: 11px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase;">
                        संस्कृत: वरूत (VARUTA) &bull; TO PROTECT
                      </span>
                    </div>

                    <!-- Company Name / Logo -->
                    <h1 style="margin: 0; font-size: 28px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px; line-height: 1.2;">
                      VARUTA <span style="font-weight: 300; opacity: 0.95;">PHARMA</span>
                    </h1>
                    <p style="margin: 6px 0 0 0; color: #a7f3d0; font-size: 13px; font-weight: 600; letter-spacing: 0.8px; text-transform: uppercase;">
                      Evidence-Graded Therapeutics &bull; Clinical Research Division
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- INSPIRATIONAL BRAND MOTTO BAR -->
          <tr>
            <td style="background-color: #f8fafc; padding: 14px 36px; border-bottom: 1px solid #e2e8f0; text-align: center;">
              <p style="margin: 0; font-size: 13px; font-weight: 600; color: #0b835c; font-style: italic;">
                &ldquo;Health Begins Where Life Is Written.&rdquo;
              </p>
            </td>
          </tr>

          <!-- MAIN CONTENT BODY -->
          <tr>
            <td style="padding: 36px 36px 28px 36px;">
              
              <!-- Salutation -->
              <h2 style="margin: 0 0 16px 0; font-size: 22px; font-weight: 700; color: #0f172a; line-height: 1.3;">
                Dear Dr. ${doctorName},
              </h2>

              <p style="margin: 0 0 18px 0; font-size: 15px; line-height: 1.65; color: #334155;">
                Thank you for your clinical interest in <strong>Varuta Pharma</strong>. We are pleased to provide the requested clinical research dossier for <strong>${productTitle}</strong>.
              </p>

              <p style="margin: 0 0 28px 0; font-size: 15px; line-height: 1.65; color: #334155;">
                As a physician-centric healthcare enterprise, our mandate is rooted in the Sanskrit principle of <em>Varuta</em> (&ldquo;to protect&rdquo;). We bridge bioactive natural molecules with rigorous pharmaceutical science to support your clinical practice and patient outcomes.
              </p>

              <!-- HIGHLIGHTED CLINICAL DOSSIER CARD -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background: linear-gradient(180deg, #ecfdf5 0%, #f0fdf4 100%); border: 1.5px solid #a7f3d0; border-radius: 16px; margin: 0 0 32px 0; overflow: hidden;">
                <tr>
                  <td style="padding: 24px;">
                    
                    <!-- Dossier Tag -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td>
                          <span style="background-color: #0b835c; color: #ffffff; font-size: 10px; font-weight: 800; letter-spacing: 1px; padding: 3px 10px; border-radius: 4px; text-transform: uppercase; display: inline-block; margin-bottom: 10px;">
                            &check; CLINICAL DOSSIER ATTACHED
                          </span>
                        </td>
                        <td align="right" style="color: #64748b; font-size: 12px; font-weight: 500;">
                          ${formattedDate} IST
                        </td>
                      </tr>
                    </table>

                    <!-- Dossier Title -->
                    <h3 style="margin: 4px 0 6px 0; font-size: 20px; font-weight: 700; color: #064e3b;">
                      ${productTitle}
                    </h3>
                    
                    <p style="margin: 0 0 16px 0; font-size: 13px; color: #047857; font-family: monospace;">
                      File: <strong>${fileName}</strong>
                    </p>

                    <p style="margin: 0 0 20px 0; font-size: 13.5px; line-height: 1.5; color: #1e3a8a;">
                      <em>Note: For your convenience, the complete monograph is <strong>directly attached to this email</strong> for your offline review. You can also view or download it directly online below.</em>
                    </p>

                    <!-- CTA Download Button -->
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="background: linear-gradient(135deg, #0b835c 0%, #044e36 100%); border-radius: 10px; text-align: center; box-shadow: 0 4px 12px rgba(11, 131, 92, 0.25);">
                          <a href="${fullDocumentUrl}" target="_blank" style="display: inline-block; padding: 13px 26px; color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 700; letter-spacing: 0.3px;">
                            &darr; View &amp; Access Clinical Dossier Online &rarr;
                          </a>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>
              </table>

              <!-- THE 3 PILLARS OF VARUTA CLINICAL EXCELLENCE -->
              <h4 style="margin: 0 0 16px 0; font-size: 15px; font-weight: 800; color: #0f172a; letter-spacing: 0.5px; text-transform: uppercase;">
                Why Clinicians Partner With Varuta Pharma:
              </h4>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 28px;">
                <tr>
                  <td style="padding: 12px 14px; background-color: #f8fafc; border-left: 3px solid #0b835c; border-radius: 0 8px 8px 0; margin-bottom: 10px;">
                    <strong style="color: #0b835c; font-size: 14px;">1. Evidence-Graded Therapeutics:</strong>
                    <p style="margin: 4px 0 0 0; font-size: 13px; color: #475569; line-height: 1.5;">
                      Engineered across 7 core verticals including reproductive health, infertility, metabolic harmony, cellular longevity, and sleep neurology.
                    </p>
                  </td>
                </tr>
                <tr><td height="10"></td></tr>
                <tr>
                  <td style="padding: 12px 14px; background-color: #f8fafc; border-left: 3px solid #06b6d4; border-radius: 0 8px 8px 0;">
                    <strong style="color: #0284c7; font-size: 14px;">2. WHO-GMP Certified Facilities:</strong>
                    <p style="margin: 4px 0 0 0; font-size: 13px; color: #475569; line-height: 1.5;">
                      Formulated in state-of-the-art licensed facilities adhering to stringent batch uniformity, chromatographic assays, and zero-compromise safety.
                    </p>
                  </td>
                </tr>
                <tr><td height="10"></td></tr>
                <tr>
                  <td style="padding: 12px 14px; background-color: #f8fafc; border-left: 3px solid #8b5cf6; border-radius: 0 8px 8px 0;">
                    <strong style="color: #7c3aed; font-size: 14px;">3. Direct Medical Science Liaison Support:</strong>
                    <p style="margin: 4px 0 0 0; font-size: 13px; color: #475569; line-height: 1.5;">
                      Access dedicated clinical coordinators for case discussions, patient dosing queries, and physician sample requests.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- INVITATION & COLLABORATION PROPOSAL BOX -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f0fdfa; border: 1px dashed #0d9488; border-radius: 12px; margin-bottom: 28px;">
                <tr>
                  <td style="padding: 18px 22px;">
                    <h5 style="margin: 0 0 6px 0; font-size: 14px; font-weight: 700; color: #0f766e;">
                      Request Complimentary Physician Samples for Your Clinic
                    </h5>
                    <p style="margin: 0 0 12px 0; font-size: 13px; color: #334155; line-height: 1.5;">
                      Would you like to evaluate <strong>${productTitle}</strong> with your patients? Our medical liaisons are pleased to provide complimentary physician evaluation packs directly to your clinic or hospital desk.
                    </p>
                    <a href="mailto:admin@varutapharmaceuticals.com?subject=Physician%20Sample%20Request%20-%20Dr.%20${encodeURIComponent(doctorName)}%20(${encodeURIComponent(productTitle)})" style="display: inline-block; color: #0d9488; font-weight: 700; font-size: 13px; text-decoration: underline;">
                      &rarr; Reply to request samples or schedule a clinical discussion
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Sign-off -->
              <p style="margin: 0 0 4px 0; font-size: 14px; color: #334155;">
                With highest professional regards,
              </p>
              <p style="margin: 0 0 2px 0; font-size: 16px; font-weight: 700; color: #0f172a;">
                Medical Affairs &amp; Clinical Research Division
              </p>
              <p style="margin: 0; font-size: 13px; color: #0b835c; font-weight: 600;">
                Varuta Pharma Pvt. Ltd.
              </p>

            </td>
          </tr>

          <!-- CORPORATE TRANSPARENCY & HEADQUARTERS FOOTER -->
          <tr>
            <td style="background-color: #0f172a; padding: 28px 36px; text-align: left; border-top: 1px solid #1e293b;">
              
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <p style="margin: 0 0 8px 0; font-size: 13px; font-weight: 700; color: #ffffff; letter-spacing: 0.5px;">
                      VARUTA PHARMA PVT. LTD.
                    </p>
                    <p style="margin: 0 0 12px 0; font-size: 11.5px; color: #94a3b8; line-height: 1.6;">
                      <strong>Registered Office:</strong> Sebiyan Apartments, Street No. 2/1/1, Pune, MH 411046<br>
                      <strong>Corporate Office:</strong> H No, Srt 283, Alwyn Colony, Sanath Nagar, Hyderabad, TS 500018<br>
                      <strong>International Office:</strong> Melbourne, Australia<br>
                      <strong>Statutory License:</strong> FSSAI Marketer Lic. No. 13624999000034
                    </p>

                    <p style="margin: 0; font-size: 11px; color: #64748b; line-height: 1.5; border-top: 1px solid #1e293b; padding-top: 12px;">
                      <strong>Confidentiality Notice:</strong> This clinical communication is intended exclusively for registered medical practitioners and healthcare professionals. The therapeutic information contained herein reflects scientific research and is not intended for consumer distribution.
                    </p>
                  </td>
                </tr>
              </table>

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
    dateStyle: 'full',
    timeStyle: 'medium',
    timeZone: 'Asia/Kolkata'
  }).format(downloadedAt);

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>New Doctor Dossier Lead - ${doctor.fullName}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0f172a;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="padding: 24px 10px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #cbd5e1; box-shadow: 0 4px 16px rgba(0,0,0,0.06);">
          
          <!-- Top Alert Strip -->
          <tr>
            <td style="background-color: #0b835c; padding: 18px 28px;">
              <h2 style="margin: 0; color: #ffffff; font-size: 18px; font-weight: 700;">
                &bull; New Doctor Clinical Dossier Download
              </h2>
              <p style="margin: 4px 0 0 0; color: #d1fae5; font-size: 12.5px;">
                Recorded via Varuta Physician Portal &bull; ${formattedDate}
              </p>
            </td>
          </tr>

          <!-- Doctor Profile Details Table -->
          <tr>
            <td style="padding: 28px;">
              
              <h3 style="margin: 0 0 16px 0; font-size: 16px; color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">
                Verified Physician Information
              </h3>

              <table role="presentation" width="100%" cellpadding="6" cellspacing="0" border="0" style="font-size: 14px; margin-bottom: 24px;">
                <tr>
                  <td width="35%" style="color: #64748b; font-weight: 600;">Full Name:</td>
                  <td style="color: #0f172a; font-weight: 700; font-size: 15px;">Dr. ${doctor.fullName}</td>
                </tr>
                <tr style="background-color: #f8fafc;">
                  <td style="color: #64748b; font-weight: 600;">Specialization:</td>
                  <td style="color: #0b835c; font-weight: 700;">${doctor.specialization}</td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 600;">Email Address:</td>
                  <td><a href="mailto:${doctor.email}" style="color: #2563eb; text-decoration: none; font-weight: 600;">${doctor.email}</a></td>
                </tr>
                <tr style="background-color: #f8fafc;">
                  <td style="color: #64748b; font-weight: 600;">Contact Phone:</td>
                  <td><a href="tel:${doctor.phone}" style="color: #2563eb; text-decoration: none; font-weight: 600;">${doctor.phone}</a></td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 600;">Clinic / Hospital Address:</td>
                  <td style="color: #334155;">${doctor.address}</td>
                </tr>
                <tr style="background-color: #f8fafc;">
                  <td style="color: #64748b; font-weight: 600;">Requested Formulation:</td>
                  <td style="color: #0f172a; font-weight: 700;">${productTitle}</td>
                </tr>
                <tr>
                  <td style="color: #64748b; font-weight: 600;">Dossier Document:</td>
                  <td style="color: #334155; font-family: monospace;">${fileName}</td>
                </tr>
                <tr style="background-color: #f8fafc;">
                  <td style="color: #64748b; font-weight: 600;">Consent Granted:</td>
                  <td style="color: #16a34a; font-weight: 700;">&check; Yes (Verified)</td>
                </tr>
              </table>

              <!-- Quick Action Buttons for Sales / MSL Team -->
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="background-color: #0b835c; border-radius: 8px; text-align: center; margin-right: 10px;">
                    <a href="mailto:${doctor.email}?subject=Varuta%20Pharma%20Follow-up%20-%20${encodeURIComponent(productTitle)}" style="display: inline-block; padding: 10px 18px; color: #ffffff; text-decoration: none; font-size: 13px; font-weight: 700;">
                      &rarr; Reply to Dr. ${doctor.fullName}
                    </a>
                  </td>
                  <td width="10"></td>
                  <td style="background-color: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 8px; text-align: center;">
                    <a href="${fullDocumentUrl}" target="_blank" style="display: inline-block; padding: 10px 18px; color: #334155; text-decoration: none; font-size: 13px; font-weight: 600;">
                      View Document
                    </a>
                  </td>
                </tr>
              </table>

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
