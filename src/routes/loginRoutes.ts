import { Router, Request, Response, NextFunction } from 'express';
import { Controllers } from './Controllers';

/* REACT ROUTER */

export const router = Router();

router.get('/', Controllers.home);

router.get('/login', Controllers.loginForm);

router.post('/login', Controllers.loginResponse);

router.get('/logout', Controllers.logOut);

router.get('/protected', Controllers.requireAuth, Controllers.protected);
