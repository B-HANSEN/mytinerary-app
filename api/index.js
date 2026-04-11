import { handle } from 'hono/vercel';
import mongoose from 'mongoose';
import app from '../app.js';

export const config = { runtime: 'nodejs' };

// Reuse DB connection across warm invocations
if (mongoose.connection.readyState === 0) {
  await mongoose.connect(process.env.MONGO_URI);
}

export default handle(app);
