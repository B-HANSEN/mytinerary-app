const config = require('config');
const jwt = require('jsonwebtoken');

const auth = async (c, next) => {
  const token = c.req.header('x-auth-token');
  if (!token) return c.json({ msg: 'No token, authorization denied' }, 401);
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    c.set('user', decoded);
    await next();
  } catch (e) {
    return c.json({ msg: 'Token is not valid' }, 400);
  }
};

module.exports = auth;
