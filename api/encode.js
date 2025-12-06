export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed, use POST' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const text = body.r02 || '';

    const encoded = encodeURIComponent(text);

    return res.status(200).json({
      encoded: encoded,
      original: text
    });
  } catch (e) {
    return res.status(400).json({ error: 'Invalid JSON body' });
  }
}
