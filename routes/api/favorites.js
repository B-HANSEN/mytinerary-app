import { Hono } from 'hono';
import User from '../../models/User.js';
import Itinerary from '../../models/Itinerary.js';

const router = new Hono();

router.put('/users/:id', async (c) => {
  const { itinId } = await c.req.json();
  console.log(itinId, c.req.param('id'));
  await User.updateOne({ _id: c.req.param('id') }, { $addToSet: { favorites: itinId } });
  return c.json({ msg: 'push done' });
});

router.delete('/users/:id/:favId', async (c) => {
  const userId = c.req.param('id');
  const favId = c.req.param('favId');
  const user = await User.findById(userId);
  const updated = user.favorites.filter((f) => f.toString() !== favId.toString());
  await User.updateOne({ _id: userId }, { $set: { favorites: updated } });
  return c.json({ msg: 'delete done' });
});

router.get('/users/:id', async (c) => {
  const user = await User.findById(c.req.param('id'));
  const itineraries = await Itinerary.find({ _id: { $in: user.favorites } });
  return c.json(itineraries);
});

export default router;
