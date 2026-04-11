import { handle } from 'hono/vercel';
import mongoose from 'mongoose';
import app from '../app.js';

export const config = { runtime: 'nodejs' };

// Connect at module load — Mongoose buffers operations until connected
if (mongoose.connection.readyState === 0) {
  mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 10000 });
}

export default handle(app);
