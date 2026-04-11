const { Hono } = require('hono');
const User = require('../../models/User');
const Itinerary = require('../../models/Itinerary');

const router = new Hono();

// @route   PUT api/favorites/users/:id
// @desc    Add favourite
router.put('/users/:id', async (c) => {
  const { itinId } = await c.req.json();
  console.log(itinId, c.req.param('id'));
  await User.updateOne({ _id: c.req.param('id') }, { $push: { favorites: [itinId] } });
  return c.json({ msg: 'push done' });
});

// @route   DELETE api/favorites/users/:id/:favId
// @desc    Remove favourite
router.delete('/users/:id/:favId', async (c) => {
  console.log(c.req.param('id'), c.req.param('favId'));
  await User.updateOne({ _id: c.req.param('id') }, { $pull: { favorites: c.req.param('favId') } });
  return c.json({ msg: 'delete done' });
});

// @route   GET api/favorites/users/:id
// @desc    Get favourites
router.get('/users/:id', async (c) => {
  const user = await User.findById(c.req.param('id'));
  const itineraries = await Itinerary.find({ _id: { $in: user.favorites } });
  return c.json(itineraries);
});

module.exports = router;
