import mongoose from 'mongoose';
import mainApp from '../app.js';

// Connect at module load — reused across warm invocations
const dbPromise =
  mongoose.connection.readyState === 0
    ? mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 10000 })
    : Promise.resolve();

export default async function handler(req, res) {
  await dbPromise;

  const proto = (req.headers['x-forwarded-proto'] || 'https').split(',')[0].trim();
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const url = `${proto}://${host}${req.url}`;

  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const body = chunks.length > 0 ? Buffer.concat(chunks) : null;

  const headers = {};
  for (const [k, v] of Object.entries(req.headers)) {
    if (v !== undefined) headers[k] = Array.isArray(v) ? v.join(', ') : v;
  }

  const webRequest = new Request(url, {
    method: req.method,
    headers,
    body: body?.length > 0 ? body : undefined,
  });

  const webResponse = await mainApp.fetch(webRequest);

  res.statusCode = webResponse.status;
  webResponse.headers.forEach((v, k) => res.setHeader(k, v));
  res.end(Buffer.from(await webResponse.arrayBuffer()));
}
