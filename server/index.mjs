import './env.mjs';
import express from 'express';
import cookieSession from 'cookie-session';
import routes from './routes.mjs';

const initServer = async () => {
  const app = express();

  // Proxy requests to http://localhost:8000/
//   app.use(
//     '/api',
//     createProxyMiddleware({
//       target: 'http://localhost:8000',
//       changeOrigin: true,
//     })
//   );

  app.use(express.json());
  app.use(
    cookieSession({
      name: 'session',
      keys: [process.env.COOKIE_SECRET],
      httpOnly: true,
      sameSite: 'strict',
    })
  );
  app.use((req, res, next) => {
    console.log(req.method.toUpperCase(), '-', req.url);
    next();
  });
  app.use(routes);

  const PORT = 8000;
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
};

initServer();
