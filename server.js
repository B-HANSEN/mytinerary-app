import config from 'config';
import path from 'path';
import fs from 'fs';
import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import mongoose from 'mongoose';
import app from './app.js';

// DB config
const db = config.get('mongoURI');
mongoose
  .connect(db)
  .then(() => console.log('connection done'))
  .catch((err) => console.log(err));

// Static uploads (local dev / self-hosted)
app.use('/uploads/*', serveStatic({ root: './' }));

// Serve React build in production
if (process.env.NODE_ENV === 'production') {
  app.use('/*', serveStatic({ root: './client/build' }));
  app.get('*', async (c) => {
    const html = await fs.promises.readFile(path.resolve('./client/build/index.html'), 'utf8');
    return c.html(html);
  });
}

const port = process.env.PORT || 5001;
serve({ fetch: app.fetch, port }, (info) => console.log(`Listening on port ${info.port}`));
