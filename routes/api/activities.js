import { Hono } from 'hono';
import Activity from '../../models/Activity.js';

const router = new Hono();

router.get('/', async (c) => {
  const activities = await Activity.find();
  return c.json(activities);
});

router.get('/:singleItinId', async (c) => {
  const activities = await Activity.find({ itinId: c.req.param('singleItinId') });
  return c.json(activities);
});

router.post('/', async (c) => {
  const { actPic, actPlace, itinId } = await c.req.json();
  const newActivity = new Activity({ actPic, actPlace, itinId });
  const activity = await newActivity.save();
  return c.json(activity);
});

router.delete('/:id', async (c) => {
  try {
    const activity = await Activity.findById(c.req.param('id'));
    await activity.deleteOne();
    return c.json({ success: true });
  } catch (err) {
    return c.json({ success: false }, 404);
  }
});

export default router;
