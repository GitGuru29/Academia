export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    order_id,
    tier,
    service,
    project_title,
    deadline,
    university,
    description,
    contact_name,
    whatsapp,
    reply_to,
    attachments,
  } = req.body;

  const apiKey = process.env.BREVO_API_KEY;
  const toEmail = process.env.BREVO_TO_EMAIL;

  if (!apiKey || !toEmail) {
    return res.status(500).json({ error: 'Email service not configured.' });
  }

  const htmlBody = `
    <h2 style="color:#2563eb">New Project Request — ${order_id}</h2>
    <table style="border-collapse:collapse;width:100%;font-family:sans-serif">
      <tr><td style="padding:8px;font-weight:600;color:#64748b;width:160px">Support Tier</td><td style="padding:8px;font-weight:700;color:#2563eb">${tier}</td></tr>
      <tr style="background:#f8fafc"><td style="padding:8px;font-weight:600;color:#64748b">Service Area</td><td style="padding:8px">${service}</td></tr>
      <tr><td style="padding:8px;font-weight:600;color:#64748b">Project Title</td><td style="padding:8px">${project_title}</td></tr>
      <tr style="background:#f8fafc"><td style="padding:8px;font-weight:600;color:#64748b">Deadline</td><td style="padding:8px">${deadline}</td></tr>
      <tr><td style="padding:8px;font-weight:600;color:#64748b">University</td><td style="padding:8px">${university}</td></tr>
      <tr style="background:#f8fafc"><td style="padding:8px;font-weight:600;color:#64748b">Description</td><td style="padding:8px">${description}</td></tr>
      <tr><td style="padding:8px;font-weight:600;color:#64748b">Name</td><td style="padding:8px">${contact_name}</td></tr>
      <tr style="background:#f8fafc"><td style="padding:8px;font-weight:600;color:#64748b">WhatsApp</td><td style="padding:8px"><a href="https://wa.me/${whatsapp.replace(/\D/g,'')}">📱 ${whatsapp}</a></td></tr>
      <tr><td style="padding:8px;font-weight:600;color:#64748b">Email</td><td style="padding:8px"><a href="mailto:${reply_to}">${reply_to}</a></td></tr>
      <tr style="background:#f8fafc"><td style="padding:8px;font-weight:600;color:#64748b">Attachments</td><td style="padding:8px;white-space:pre-line">${attachments}</td></tr>
    </table>
  `;

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        sender: { name: 'Academic. Platform', email: toEmail },
        to: [{ email: toEmail }],
        replyTo: { email: reply_to, name: contact_name },
        subject: `[${order_id}] New Request — ${service}`,
        htmlContent: htmlBody,
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.message || 'Brevo API error');
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Brevo error:', error);
    return res.status(500).json({ error: error.message || 'Failed to send email' });
  }
}
