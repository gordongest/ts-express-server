import { Request, Response } from 'express';

interface RequestBody extends Request {
  body: { [key: string]: string | undefined };
}

const Controllers = {
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

    if (email) {
      res.status(200).send(email.toUpperCase());
    } else {
      res.send('Email must be provided');
    }
  },
};

export { Controllers };
