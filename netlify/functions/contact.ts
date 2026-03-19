import type { Handler } from "@netlify/functions";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const ZONET_EMAIL = "contact@zonet.fr";
const ZONET_PHONE = "01 XX XX XX XX";
const ZONET_SITE = "https://www.zonet.fr";

const PRIMARY = "#1e3a6e";
const ACCENT = "#60a5fa";

function notificationHtml(name: string, email: string, phone: string, service: string, message: string) {
  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#f4f6fb;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6fb;padding:32px 0;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:${PRIMARY};padding:28px 36px;">
            <p style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.5px;">ZONET</p>
            <p style="margin:4px 0 0;color:rgba(255,255,255,0.65);font-size:13px;">Nettoyage tout corps d'état</p>
          </td>
        </tr>

        <!-- Badge -->
        <tr>
          <td style="padding:28px 36px 0;">
            <span style="display:inline-block;background:#e8f0fe;color:${PRIMARY};font-size:12px;font-weight:700;padding:5px 14px;border-radius:20px;text-transform:uppercase;letter-spacing:0.5px;">
              📋 Nouvelle demande de devis
            </span>
          </td>
        </tr>

        <!-- Intro -->
        <tr>
          <td style="padding:16px 36px 24px;">
            <p style="margin:0;color:#1a1a2e;font-size:18px;font-weight:700;">${name} souhaite un devis</p>
            <p style="margin:6px 0 0;color:#6b7280;font-size:14px;">Prestation demandée : <strong style="color:${PRIMARY}">${service}</strong></p>
          </td>
        </tr>

        <!-- Séparateur -->
        <tr><td style="padding:0 36px;"><hr style="border:none;border-top:1px solid #e5e7eb;margin:0;"/></td></tr>

        <!-- Détails -->
        <tr>
          <td style="padding:24px 36px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">
                  <span style="color:#9ca3af;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Nom complet</span><br/>
                  <span style="color:#111827;font-size:15px;font-weight:600;margin-top:2px;display:block;">${name}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">
                  <span style="color:#9ca3af;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Email</span><br/>
                  <a href="mailto:${email}" style="color:${ACCENT};font-size:15px;font-weight:600;text-decoration:none;margin-top:2px;display:block;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">
                  <span style="color:#9ca3af;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Téléphone</span><br/>
                  <a href="tel:${phone.replace(/\s/g, '')}" style="color:${ACCENT};font-size:15px;font-weight:600;text-decoration:none;margin-top:2px;display:block;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;${message ? 'border-bottom:1px solid #f3f4f6;' : ''}">
                  <span style="color:#9ca3af;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Prestation souhaitée</span><br/>
                  <span style="color:#111827;font-size:15px;font-weight:600;margin-top:2px;display:block;">${service}</span>
                </td>
              </tr>
              ${message ? `<tr>
                <td style="padding:10px 0;">
                  <span style="color:#9ca3af;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Message</span><br/>
                  <span style="color:#374151;font-size:14px;margin-top:6px;display:block;line-height:1.6;background:#f9fafb;padding:12px;border-radius:8px;border-left:3px solid ${ACCENT};">${message}</span>
                </td>
              </tr>` : ''}
            </table>
          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td style="padding:0 36px 32px;">
            <a href="mailto:${email}?subject=Re: Votre demande de devis ZONET — ${service}" style="display:inline-block;background:${PRIMARY};color:#ffffff;font-size:14px;font-weight:700;padding:13px 28px;border-radius:8px;text-decoration:none;">
              Répondre à ${name} →
            </a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f9fafb;padding:18px 36px;border-top:1px solid #e5e7eb;">
            <p style="margin:0;color:#9ca3af;font-size:12px;">Ce message a été envoyé automatiquement depuis le formulaire de contact de <a href="${ZONET_SITE}" style="color:${ACCENT};text-decoration:none;">zonet.fr</a></p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function confirmationHtml(name: string, service: string) {
  const firstName = name.split(" ")[0];
  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#f4f6fb;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6fb;padding:32px 0;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:${PRIMARY};padding:28px 36px;">
            <p style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.5px;">ZONET</p>
            <p style="margin:4px 0 0;color:rgba(255,255,255,0.65);font-size:13px;">Nettoyage tout corps d'état</p>
          </td>
        </tr>

        <!-- Confirmation icon -->
        <tr>
          <td align="center" style="padding:36px 36px 20px;">
            <div style="width:64px;height:64px;background:#e8f0fe;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:28px;line-height:64px;text-align:center;">✅</div>
          </td>
        </tr>

        <!-- Titre -->
        <tr>
          <td align="center" style="padding:0 36px 8px;">
            <p style="margin:0;color:#1a1a2e;font-size:22px;font-weight:700;">Demande bien reçue, ${firstName} !</p>
          </td>
        </tr>

        <!-- Intro -->
        <tr>
          <td align="center" style="padding:8px 36px 28px;">
            <p style="margin:0;color:#6b7280;font-size:15px;line-height:1.7;max-width:420px;">
              Merci pour votre confiance. Nous avons bien enregistré votre demande concernant <strong style="color:${PRIMARY}">${service}</strong> et notre équipe vous recontactera dans les <strong>24 heures</strong>.
            </p>
          </td>
        </tr>

        <!-- Séparateur -->
        <tr><td style="padding:0 36px;"><hr style="border:none;border-top:1px solid #e5e7eb;margin:0;"/></td></tr>

        <!-- Ce qui se passe ensuite -->
        <tr>
          <td style="padding:28px 36px;">
            <p style="margin:0 0 16px;color:#1a1a2e;font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">La suite ?</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="36" valign="top" style="padding-bottom:16px;">
                  <span style="display:inline-block;width:26px;height:26px;background:${ACCENT};border-radius:50%;color:#fff;font-size:12px;font-weight:700;text-align:center;line-height:26px;">1</span>
                </td>
                <td style="padding-bottom:16px;padding-left:10px;">
                  <p style="margin:0;color:#111827;font-size:14px;font-weight:600;">Prise de contact sous 24h</p>
                  <p style="margin:2px 0 0;color:#6b7280;font-size:13px;">Un membre de notre équipe vous appellera pour cerner précisément vos besoins.</p>
                </td>
              </tr>
              <tr>
                <td width="36" valign="top" style="padding-bottom:16px;">
                  <span style="display:inline-block;width:26px;height:26px;background:${ACCENT};border-radius:50%;color:#fff;font-size:12px;font-weight:700;text-align:center;line-height:26px;">2</span>
                </td>
                <td style="padding-bottom:16px;padding-left:10px;">
                  <p style="margin:0;color:#111827;font-size:14px;font-weight:600;">Devis gratuit et personnalisé</p>
                  <p style="margin:2px 0 0;color:#6b7280;font-size:13px;">Nous vous envoyons une proposition détaillée et sans engagement.</p>
                </td>
              </tr>
              <tr>
                <td width="36" valign="top">
                  <span style="display:inline-block;width:26px;height:26px;background:${ACCENT};border-radius:50%;color:#fff;font-size:12px;font-weight:700;text-align:center;line-height:26px;">3</span>
                </td>
                <td style="padding-left:10px;">
                  <p style="margin:0;color:#111827;font-size:14px;font-weight:600;">Intervention à votre convenance</p>
                  <p style="margin:2px 0 0;color:#6b7280;font-size:13px;">On s'adapte à votre planning pour intervenir au moment qui vous arrange.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Contact direct -->
        <tr>
          <td style="padding:0 36px 32px;">
            <div style="background:#f0f4ff;border-radius:10px;padding:16px 20px;">
              <p style="margin:0 0 4px;color:#1a1a2e;font-size:13px;font-weight:700;">Une question urgente ?</p>
              <p style="margin:0;color:#6b7280;font-size:13px;">Appelez-nous directement au <a href="tel:${ZONET_PHONE.replace(/\s/g, '')}" style="color:${PRIMARY};font-weight:700;text-decoration:none;">${ZONET_PHONE}</a> ou répondez à cet email.</p>
            </div>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f9fafb;padding:18px 36px;border-top:1px solid #e5e7eb;">
            <p style="margin:0;color:#9ca3af;font-size:12px;text-align:center;">
              © 2026 ZONET — Nettoyage tout corps d'état<br/>
              <a href="${ZONET_SITE}" style="color:${ACCENT};text-decoration:none;">zonet.fr</a> · <a href="mailto:${ZONET_EMAIL}" style="color:${ACCENT};text-decoration:none;">${ZONET_EMAIL}</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let body: { name: string; email: string; phone: string; service: string; message: string };

  try {
    body = JSON.parse(event.body ?? "{}");
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Corps de requête invalide." }) };
  }

  const { name, email, phone, service, message } = body;

  if (!name || !email || !phone || !service) {
    return { statusCode: 400, body: JSON.stringify({ error: "Veuillez remplir tous les champs obligatoires." }) };
  }

  try {
    await Promise.all([
      resend.emails.send({
        from: `ZONET Site <no-reply@zonet.fr>`,
        to: [ZONET_EMAIL],
        replyTo: email,
        subject: `📋 Nouvelle demande — ${service} · ${name}`,
        html: notificationHtml(name, email, phone, service, message),
      }),
      resend.emails.send({
        from: `ZONET <no-reply@zonet.fr>`,
        to: [email],
        replyTo: ZONET_EMAIL,
        subject: `Votre demande a bien été reçue, ${name.split(" ")[0]} — ZONET`,
        html: confirmationHtml(name, service),
      }),
    ]);

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error("Resend error:", err);
    return { statusCode: 500, body: JSON.stringify({ error: "Une erreur est survenue lors de l'envoi. Veuillez nous appeler directement." }) };
  }
};
