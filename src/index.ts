import express from 'express';
import { router } from './routes/loginRoutes';

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(PORT, (): void => {
  console.log('listenin\'')
});