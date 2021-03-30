import express from 'express';
import cookieSession from 'cookie-session';
import { router } from './routes/loginRoutes';

export const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['sessionkey'] }))
app.use(router);