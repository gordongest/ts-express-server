"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controllers = void 0;
exports.Controllers = {
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
        res.send(email + password);
    },
};
