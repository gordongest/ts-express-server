"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const loginRoutes_1 = require("./routes/loginRoutes");
exports.app = express_1.default();
exports.app.use(express_1.default.urlencoded({ extended: true }));
exports.app.use(cookie_session_1.default({ keys: ['sessionkey'] }));
exports.app.use(loginRoutes_1.router);
