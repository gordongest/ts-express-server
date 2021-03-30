"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const Controllers_1 = require("./Controllers");
/* REACT ROUTER */
exports.router = express_1.Router();
exports.router.get('/', Controllers_1.Controllers.home);
exports.router.get('/login', Controllers_1.Controllers.loginForm);
exports.router.post('/login', Controllers_1.Controllers.loginResponse);
exports.router.get('/logout', Controllers_1.Controllers.logOut);
exports.router.get('/protected', Controllers_1.Controllers.requireAuth, Controllers_1.Controllers.protected);
