const { Hono } = require('hono');
const City = require('../../models/City');

const router = new Hono();

router.get('/', async (c) => {
  const cities = await City.find();
  return c.json(cities);
});

router.post('/', async (c) => {
  const { name } = await c.req.json();
  const newCity = new City({ name });
  const city = await newCity.save();
  return c.json(city);
});

router.delete('/:id', async (c) => {
  try {
    const city = await City.findById(c.req.param('id'));
    await city.deleteOne();
    return c.json({ success: true });
  } catch (err) {
    return c.json({ success: false }, 404);
  }
});

router.get('/:id', async (c) => {
  const city = await City.findById(c.req.param('id'));
  return c.json(city);
});

module.exports = router;
