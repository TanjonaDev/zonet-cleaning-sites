import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const ZONET_EMAIL = "contact@zonet.fr";
const ZONET_PHONE = "01 XX XX XX XX";
const ZONET_SITE = "https://zonet-iota.vercel.app";
const PRIMARY = "#1e3a6e";
const ACCENT = "#60a5fa";

function notificationHtml(name: string, email: string, phone: string, service: string, message: string) {
  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#f4f6fb;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6fb;padding:32px 0;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <tr>
          <td style="background:${PRIMARY};padding:28px 36px;">
            <p style="margin:0;color:#ffffff;font-size:22px;font-weight:700;">ZONET</p>
            <p style="margin:4px 0 0;color:rgba(255,255,255,0.65);font-size:13px;">Spécialiste nettoyage chaînes de magasins & pharmacies</p>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 36px 0;">
            <span style="display:inline-block;background:#e8f0fe;color:${PRIMARY};font-size:12px;font-weight:700;padding:5px 14px;border-radius:20px;text-transform:uppercase;letter-spacing:0.5px;">
              📋 Nouvelle demande de devis
            </span>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 36px 24px;">
            <p style="margin:0;color:#1a1a2e;font-size:18px;font-weight:700;">${name} souhaite un devis</p>
            <p style="margin:6px 0 0;color:#6b7280;font-size:14px;">Prestation : <strong style="color:${PRIMARY}">${service}</strong></p>
          </td>
        </tr>
        <tr><td style="padding:0 36px;"><hr style="border:none;border-top:1px solid #e5e7eb;"/></td></tr>
        <tr>
          <td style="padding:24px 36px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">
                <span style="color:#9ca3af;font-size:12px;font-weight:700;text-transform:uppercase;">Nom</span><br/>
                <span style="color:#111827;font-size:15px;font-weight:600;">${name}</span>
              </td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">
                <span style="color:#9ca3af;font-size:12px;font-weight:700;text-transform:uppercase;">Email</span><br/>
                <a href="mailto:${email}" style="color:${ACCENT};font-size:15px;font-weight:600;text-decoration:none;">${email}</a>
              </td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">
                <span style="color:#9ca3af;font-size:12px;font-weight:700;text-transform:uppercase;">Téléphone</span><br/>
                <a href="tel:${phone.replace(/\s/g, '')}" style="color:${ACCENT};font-size:15px;font-weight:600;text-decoration:none;">${phone}</a>
              </td></tr>
              <tr><td style="padding:10px 0;${message ? 'border-bottom:1px solid #f3f4f6;' : ''}">
                <span style="color:#9ca3af;font-size:12px;font-weight:700;text-transform:uppercase;">Prestation</span><br/>
                <span style="color:#111827;font-size:15px;font-weight:600;">${service}</span>
              </td></tr>
              ${message ? `<tr><td style="padding:10px 0;">
                <span style="color:#9ca3af;font-size:12px;font-weight:700;text-transform:uppercase;">Message</span><br/>
                <span style="color:#374151;font-size:14px;display:block;background:#f9fafb;padding:12px;border-radius:8px;border-left:3px solid ${ACCENT};">${message}</span>
              </td></tr>` : ''}
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:0 36px 32px;">
            <a href="mailto:${email}?subject=Re: Votre demande ZONET — ${service}" style="display:inline-block;background:${PRIMARY};color:#ffffff;font-size:14px;font-weight:700;padding:13px 28px;border-radius:8px;text-decoration:none;">
              Répondre à ${name} →
            </a>
          </td>
        </tr>
        <tr>
          <td style="background:#f9fafb;padding:18px 36px;border-top:1px solid #e5e7eb;">
            <p style="margin:0;color:#9ca3af;font-size:12px;">Envoyé depuis le formulaire de <a href="${ZONET_SITE}" style="color:${ACCENT};text-decoration:none;">zonet.fr</a></p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

function confirmationHtml(name: string, service: string) {
  const firstName = name.split(" ")[0];
  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#f4f6fb;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6fb;padding:32px 0;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <tr>
          <td style="background:${PRIMARY};padding:28px 36px;">
            <p style="margin:0;color:#ffffff;font-size:22px;font-weight:700;">ZONET</p>
            <p style="margin:4px 0 0;color:rgba(255,255,255,0.65);font-size:13px;">Spécialiste nettoyage chaînes de magasins & pharmacies</p>
          </td>
        </tr>
        <tr><td align="center" style="padding:36px 36px 20px;"><div style="font-size:40px;">✅</div></td></tr>
        <tr><td align="center" style="padding:0 36px 8px;">
          <p style="margin:0;color:#1a1a2e;font-size:22px;font-weight:700;">Demande bien reçue, ${firstName} !</p>
        </td></tr>
        <tr><td align="center" style="padding:8px 36px 28px;">
          <p style="margin:0;color:#6b7280;font-size:15px;line-height:1.7;max-width:420px;">
            Merci pour votre confiance. Nous avons bien enregistré votre demande concernant <strong style="color:${PRIMARY}">${service}</strong> et notre équipe vous recontactera dans les <strong>24 heures</strong>.
          </p>
        </td></tr>
        <tr><td style="padding:0 36px;"><hr style="border:none;border-top:1px solid #e5e7eb;"/></td></tr>
        <tr>
          <td style="padding:28px 36px;">
            <p style="margin:0 0 16px;color:#1a1a2e;font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">La suite ?</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="36" valign="top" style="padding-bottom:16px;"><span style="display:inline-block;width:26px;height:26px;background:${ACCENT};border-radius:50%;color:#fff;font-size:12px;font-weight:700;text-align:center;line-height:26px;">1</span></td>
                <td style="padding-bottom:16px;padding-left:10px;"><p style="margin:0;color:#111827;font-size:14px;font-weight:600;">Prise de contact sous 24h</p><p style="margin:2px 0 0;color:#6b7280;font-size:13px;">Un membre de notre équipe vous appellera pour cerner vos besoins.</p></td>
              </tr>
              <tr>
                <td width="36" valign="top" style="padding-bottom:16px;"><span style="display:inline-block;width:26px;height:26px;background:${ACCENT};border-radius:50%;color:#fff;font-size:12px;font-weight:700;text-align:center;line-height:26px;">2</span></td>
                <td style="padding-bottom:16px;padding-left:10px;"><p style="margin:0;color:#111827;font-size:14px;font-weight:600;">Devis gratuit et personnalisé</p><p style="margin:2px 0 0;color:#6b7280;font-size:13px;">Une proposition détaillée, adaptée à vos points de vente, sans engagement.</p></td>
              </tr>
              <tr>
                <td width="36" valign="top"><span style="display:inline-block;width:26px;height:26px;background:${ACCENT};border-radius:50%;color:#fff;font-size:12px;font-weight:700;text-align:center;line-height:26px;">3</span></td>
                <td style="padding-left:10px;"><p style="margin:0;color:#111827;font-size:14px;font-weight:600;">Intervention à votre convenance</p><p style="margin:2px 0 0;color:#6b7280;font-size:13px;">On s'adapte à vos horaires d'ouverture pour n'impacter aucune vente.</p></td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:0 36px 32px;">
            <div style="background:#f0f4ff;border-radius:10px;padding:16px 20px;">
              <p style="margin:0 0 4px;color:#1a1a2e;font-size:13px;font-weight:700;">Une question urgente ?</p>
              <p style="margin:0;color:#6b7280;font-size:13px;">Appelez-nous au <a href="tel:${ZONET_PHONE.replace(/\s/g, '')}" style="color:${PRIMARY};font-weight:700;text-decoration:none;">${ZONET_PHONE}</a> ou répondez à cet email.</p>
            </div>
          </td>
        </tr>
        <tr>
          <td style="background:#f9fafb;padding:18px 36px;border-top:1px solid #e5e7eb;">
            <p style="margin:0;color:#9ca3af;font-size:12px;text-align:center;">
              © 2026 ZONET · <a href="${ZONET_SITE}" style="color:${ACCENT};text-decoration:none;">zonet.fr</a> · <a href="mailto:${ZONET_EMAIL}" style="color:${ACCENT};text-decoration:none;">${ZONET_EMAIL}</a>
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, phone, service, message } = req.body ?? {};

  if (!name || !email || !phone || !service) {
    return res.status(400).json({ error: "Veuillez remplir tous les champs obligatoires." });
  }

  try {
    await Promise.all([
      resend.emails.send({
        from: "ZONET Site <no-reply@zonet.fr>",
        to: [ZONET_EMAIL],
        replyTo: email,
        subject: `📋 Nouvelle demande — ${service} · ${name}`,
        html: notificationHtml(name, email, phone, service, message ?? ""),
      }),
      resend.emails.send({
        from: "ZONET <no-reply@zonet.fr>",
        to: [email],
        replyTo: ZONET_EMAIL,
        subject: `Votre demande a bien été reçue, ${name.split(" ")[0]} — ZONET`,
        html: confirmationHtml(name, service),
      }),
    ]);

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return res.status(500).json({ error: "Une erreur est survenue. Veuillez nous appeler directement." });
  }
}
