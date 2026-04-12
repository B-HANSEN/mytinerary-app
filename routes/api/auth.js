import { Hono } from 'hono';
import { promisify } from 'util';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import auth from '../../middleware/auth.js';
import User from '../../models/User.js';

const router = new Hono();
const signAsync = promisify(jwt.sign);

// @route   POST api/auth
// @desc    Auth user
// @access  Public
router.post('/', async (c) => {
  const { email, password } = await c.req.json();

  if (!email || !password) return c.json({ msg: 'Please enter all fields' }, 400);

  const user = await User.findOne({ email });
  if (!user) return c.json({ msg: 'User does not exist' }, 400);

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return c.json({ msg: 'Invalid credentials' }, 400);

  const token = await signAsync({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 3600 });
  return c.json({ token, user: { _id: user.id, name: user.name, email: user.email, favorites: user.favorites } });
});

// @route   GET api/auth/user
// @desc    Get user data
// @access  Private
router.get('/user', auth, async (c) => {
  console.log('LoadUser', c.get('user').id);
  const user = await User.findById(c.get('user').id).select('-password');
  return c.json(user);
});

export default router;
