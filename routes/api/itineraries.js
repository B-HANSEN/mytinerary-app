import { Hono } from 'hono';
import Itinerary from '../../models/Itinerary.js';

const router = new Hono();

router.get('/:singleCityId', async (c) => {
  console.log(c.req.param('singleCityId'));
  const itineraries = await Itinerary.find({ cityId: c.req.param('singleCityId') });
  console.log(itineraries);
  return c.json(itineraries);
});

router.put('/:itinId/rating', async (c) => {
  const { amount } = await c.req.json();
  const iti = await Itinerary.updateOne({ _id: c.req.param('itinId') }, { $inc: { rating: amount } });
  return c.json({ msg: 'changed by 1 count', itinerary: iti });
});

router.post('/', async (c) => {
  const { title, profilePic, username, rating, duration, price, hashtag, cityId } = await c.req.json();
  const newItinerary = new Itinerary({ title, profilePic, username, rating, duration, price, hashtag, cityId });
  const itinerary = await newItinerary.save();
  return c.json(itinerary);
});

router.delete('/:id', async (c) => {
  try {
    const itinerary = await Itinerary.findById(c.req.param('id'));
    await itinerary.deleteOne();
    return c.json({ success: true });
  } catch (err) {
    return c.json({ success: false }, 404);
  }
});

export default router;
