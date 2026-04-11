import { Hono } from 'hono';
import User from '../../models/User.js';
import Itinerary from '../../models/Itinerary.js';

const router = new Hono();

router.put('/users/:id', async (c) => {
  const { itinId } = await c.req.json();
  console.log(itinId, c.req.param('id'));
  await User.updateOne({ _id: c.req.param('id') }, { $push: { favorites: [itinId] } });
  return c.json({ msg: 'push done' });
});

router.delete('/users/:id/:favId', async (c) => {
  console.log(c.req.param('id'), c.req.param('favId'));
  await User.updateOne({ _id: c.req.param('id') }, { $pull: { favorites: c.req.param('favId') } });
  return c.json({ msg: 'delete done' });
});

router.get('/users/:id', async (c) => {
  const user = await User.findById(c.req.param('id'));
  const itineraries = await Itinerary.find({ _id: { $in: user.favorites } });
  return c.json(itineraries);
});

export default router;
