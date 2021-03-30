import { Request, Response, NextFunction } from 'express';

interface RequestBody extends Request {
  body: { [key: string]: string | undefined };
}

export const Controllers = {
  home(req: RequestBody, res: Response): void {
    if (req.session && req.session.loggedIn) {
      res.send(`
        <div>
          <p>You are logged in!</p>
          <a href="/logout"> Log Out</a>
        </div>
      `);
    } else {
      res.send(`
        <div>
          <p>You are not logged in.</p>
          <a href="/login"> Log In</a>
        </div>
      `);
    }
  },

  loginForm(req: RequestBody, res: Response): void {
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

  loginResponse(req: RequestBody, res: Response): void {
    const { email, password } = req.body;

    if (
      email &&
      password &&
      email === 'test@test.com' &&
      password === 'password'
    ) {
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('Invalid login info');
    }
  },

  logOut(req: RequestBody, res: Response): void {
    req.session = undefined;
    res.redirect('/');
  },

  protected(req: RequestBody, res: Response): void {
    res.send('Welcome to the inner sanctum, logged in user!')
  },

  requireAuth(req: Request, res: Response, next: NextFunction): void {
    if (req.session && req.session.loggedIn) {
      next();
      return;
    } else {
      res.status(403).send('Unauthorized');
    }
  },
};
