import { handle } from 'hono/vercel';
import { Hono } from 'hono';
import mongoose from 'mongoose';
import mainApp from '../app.js';

export const config = { runtime: 'nodejs' };

const api = new Hono();

// DB middleware registered BEFORE mainApp routes
api.use('*', async (c, next) => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 10000 });
  }
  return next();
});

api.route('/', mainApp);

export default handle(api);
