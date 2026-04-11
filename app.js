import { Hono } from 'hono';

import citiesRouter from './routes/api/cities.js';
import itinerariesRouter from './routes/api/itineraries.js';
import favoritesRouter from './routes/api/favorites.js';
import usersRouter from './routes/api/users.js';
import authRouter from './routes/api/auth.js';
import activitiesRouter from './routes/api/activities.js';
import commentsRouter from './routes/api/comments.js';

const app = new Hono();

// Allow Google OAuth popup to communicate back
app.use('*', async (c, next) => {
  await next();
  c.header('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
});

app.route('/api/cities', citiesRouter);
app.route('/api/itineraries', itinerariesRouter);
app.route('/api/favorites', favoritesRouter);
app.route('/api/users', usersRouter);
app.route('/api/auth', authRouter);
app.route('/api/activities', activitiesRouter);
app.route('/api/comments', commentsRouter);

export default app;
