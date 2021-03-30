import { Request, Response } from 'express';

export const Controllers = {
  loginForm(req: Request, res: Response): void {
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

  loginResponse(req: Request, res: Response): void {
    const { email, password } = req.body

    res.send(email + password)
  },

};