const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use((req, res, next) => {
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
    next();
  });

  app.use('/api', createProxyMiddleware({ target: 'http://localhost:5001', changeOrigin: true }));
};
