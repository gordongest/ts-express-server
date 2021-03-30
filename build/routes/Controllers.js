"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controllers = void 0;
exports.Controllers = {
    home(req, res) {
        if (req.session && req.session.loggedIn) {
            res.send(`
        <div>
          <p>You are logged in!</p>
          <a href="/logout"> Log Out</a>
        </div>
      `);
        }
        else {
            res.send(`
        <div>
          <p>You are not logged in.</p>
          <a href="/login"> Log In</a>
        </div>
      `);
        }
    },
    loginForm(req, res) {
        res.send(`
      <form method="POST">
        <div>
          <label>Email</label>
          <input name="email" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" />
        </div>
        <button>Submit</button>
      </form>
    `);
    },
    loginResponse(req, res) {
        const { email, password } = req.body;
        if (email &&
            password &&
            email === 'test@test.com' &&
            password === 'password') {
            req.session = { loggedIn: true };
            res.redirect('/');
        }
        else {
            res.send('Invalid login info');
        }
    },
    logOut(req, res) {
        req.session = undefined;
        res.redirect('/');
    },
    protected(req, res) {
        res.send('Welcome to the inner sanctum, logged in user!');
    },
    requireAuth(req, res, next) {
        if (req.session && req.session.loggedIn) {
            next();
            return;
        }
        else {
            res.status(403).send('Unauthorized');
        }
    },
};
