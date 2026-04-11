const { Hono } = require('hono');
const { promisify } = require('util');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');

const router = new Hono();
const signAsync = promisify(jwt.sign);

// GET all users
router.get('/', async (c) => {
  const users = await User.find().select('-password');
  return c.json(users);
});

// @route   POST api/users
// @desc    Register new user
// @access  Public
router.post('/', async (c) => {
  const body = await c.req.parseBody();
  const { name, email, password } = body;

  if (!name || !email || !password) return c.json({ msg: 'Please enter all fields' }, 400);

  const existing = await User.findOne({ email });
  if (existing) return c.json({ msg: 'User already exists' }, 400);

  // Handle avatar upload
  let avatarPath;
  const file = body['avatar'];
  if (file && file instanceof File) {
    if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
      return c.json({ msg: 'Invalid file type' }, 400);
    }
    const filename = Date.now() + '-' + file.name;
    avatarPath = `uploads/${filename}`;
    await fs.promises.writeFile(path.join('./uploads', filename), Buffer.from(await file.arrayBuffer()));
  }

  const newUser = new User({ name, email, password, avatar: avatarPath });

  const salt = await bcrypt.genSalt(10);
  newUser.password = await bcrypt.hash(newUser.password, salt);
  const user = await newUser.save();

  const token = await signAsync({ id: user.id }, config.get('jwtSecret'), { expiresIn: 3600 });
  return c.json({ token, user: { _id: user.id, name: user.name, email: user.email, favorites: [], avatar: user.avatar } });
});

// @route   POST api/users/social
// @desc    Register/login via Google
// @access  Public
router.post('/social', async (c) => {
  console.log('login to google');
  const { name, email } = await c.req.json();

  if (!name || !email) return c.json({ msg: 'Please enter all fields' }, 400);

  const existing = await User.findOne({ email }).select('-password');
  if (existing) {
    const token = await signAsync({ id: existing.id }, config.get('jwtSecret'), { expiresIn: 3600 });
    return c.json({ token, user: existing });
  }

  const newUser = new User({ name, email });
  const user = await newUser.save();
  const token = await signAsync({ id: user.id }, config.get('jwtSecret'), { expiresIn: 3600 });
  return c.json({ token, user: { _id: user.id, name: user.name, email: user.email, favorites: [] } });
});

// GET user by id
router.get('/:userId', async (c) => {
  const user = await User.findById(c.req.param('userId'));
  return c.json(user);
});

module.exports = router;
