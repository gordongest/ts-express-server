import express from 'express';
import cookieSession from 'cookie-session';
import { router } from './routes/loginRoutes';

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['sessionkey'] }))
app.use(router);

app.listen(PORT, (): void => {
  console.log('listenin\'')
});