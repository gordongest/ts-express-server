import { Router } from 'express';
import { Controllers } from './Controllers'

/* REACT ROUTER */

const router = Router();

router.get('/login', Controllers.loginForm);

router.post('/login', Controllers.loginResponse);

export { router };



/* THAT OTHER WAY YOU LEARNED */
// interface App {
//   get(endpoint: string, callback: (req: Request, res: Response) => void): void;
//   post(endpoint: string, callback: (req: Request, res: Response) => void): void
// }

// const router = (app: App): void => {
//   app.get('/login', Controllers.loginForm);

//   app.post('/login', Controllers.loginResponse)
// }

// export { router };