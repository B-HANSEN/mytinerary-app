const config = require('config');
const path = require('path');
const fs = require('fs');
const { Hono } = require('hono');
const { serve } = require('@hono/node-server');
const { serveStatic } = require('@hono/node-server/serve-static');
const mongoose = require('mongoose');

const app = new Hono();

// DB config
const db = config.get('mongoURI');
mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log('connection done'))
  .catch(err => console.log(err));

// Allow Google OAuth popup to communicate back
app.use('*', async (c, next) => {
  await next();
  c.header('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
});

// Routes
app.route('/api/cities', require('./routes/api/cities'));
app.route('/api/itineraries', require('./routes/api/itineraries'));
app.route('/api/favorites', require('./routes/api/favorites'));
app.route('/api/users', require('./routes/api/users'));
app.route('/api/auth', require('./routes/api/auth'));
app.route('/api/activities', require('./routes/api/activities'));
app.route('/api/comments', require('./routes/api/comments'));

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
