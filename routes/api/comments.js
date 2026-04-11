const { Hono } = require('hono');
const Comment = require('../../models/Comment');

const router = new Hono();

router.get('/', async (c) => {
  const comments = await Comment.find();
  return c.json(comments);
});

router.get('/:singleItinId', async (c) => {
  const comments = await Comment.find({ itinId: c.req.param('singleItinId') });
  return c.json(comments);
});

router.post('/', async (c) => {
  const { itinId, text, user } = await c.req.json();
  const newComment = new Comment({ itinId, text, user });
  const comment = await newComment.save();
  return c.json(comment);
});

module.exports = router;
