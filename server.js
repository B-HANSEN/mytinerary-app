import config from 'config';
import path from 'path';
import fs from 'fs';
import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import mongoose from 'mongoose';

import citiesRouter from './routes/api/cities.js';
import itinerariesRouter from './routes/api/itineraries.js';
import favoritesRouter from './routes/api/favorites.js';
import usersRouter from './routes/api/users.js';
import authRouter from './routes/api/auth.js';
import activitiesRouter from './routes/api/activities.js';
import commentsRouter from './routes/api/comments.js';

const app = new Hono();

// DB config
const db = config.get('mongoURI');
mongoose
  .connect(db)
  .then(() => console.log('connection done'))
  .catch((err) => console.log(err));

// Allow Google OAuth popup to communicate back
app.use('*', async (c, next) => {
  await next();
  c.header('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
});

// Routes
app.route('/api/cities', citiesRouter);
app.route('/api/itineraries', itinerariesRouter);
app.route('/api/favorites', favoritesRouter);
app.route('/api/users', usersRouter);
app.route('/api/auth', authRouter);
app.route('/api/activities', activitiesRouter);
app.route('/api/comments', commentsRouter);

// Static uploads
app.use('/uploads/*', serveStatic({ root: './' }));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use('/*', serveStatic({ root: './client/build' }));
  app.get('*', async (c) => {
    const html = await fs.promises.readFile(path.resolve('./client/build/index.html'), 'utf8');
    return c.html(html);
  });
}

const port = process.env.PORT || 5001;
serve({ fetch: app.fetch, port }, (info) => console.log(`Listening on port ${info.port}`));
