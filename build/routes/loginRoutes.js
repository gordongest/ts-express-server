"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const Controllers_1 = require("./Controllers");
/* REACT ROUTER */
const router = express_1.Router();
exports.router = router;
router.get('/login', Controllers_1.Controllers.loginForm);
router.post('/login', Controllers_1.Controllers.loginResponse);
/* THAT OTHER WAY YOU LEARNED */
// interface App {
//   get(endpoint: string, callback: (req: Request, res: Response) => void): void;
//   post(endpoint: string, callback: (req: Request, res: Response) => void): void
// }
// export const router = (app: App): void => {
//   app.get('/login', Controllers.loginForm);
//   app.post('/login', Controllers.loginResponse)
// }
