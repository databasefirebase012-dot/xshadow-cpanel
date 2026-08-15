export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
  const firebaseUrl = process.env.FIREBASE_URL;

  if (!firebaseUrl) {
    return res.status(500).json({ error: 'ENV_FIREBASE_URL_MISSING' });
  }

  res.status(200).json({ firebaseUrl });
}
