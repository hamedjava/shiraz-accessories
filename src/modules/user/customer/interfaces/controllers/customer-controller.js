// interfaces/controllers/customer-controller.js

import { CustomerService } from "../../application/services/customer-service.js";
const service = new CustomerService();

export class CustomerController {
  /* ------------- Registration ------------- */
  async registerEmail(req, res) {
    try {
      const { name, email, password } = req.body;
      const user = await service.registerEmailPassword(name, email, password);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async registerMobile(req, res) {
    try {
      const { name, mobile, password } = req.body;
      const user = await service.registerMobilePassword(name, mobile, password);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  /* ------------- OTP Login ------------- */
  async requestOtp(req, res) {
    try {
      const otp = await service.requestOtp(req.body.mobile);
      res.json({ message: "OTP ارسال شد", otp });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async loginOtp(req, res) {
    try {
      const { mobile, otp } = req.body;
      const data = await service.loginMobileOtp(mobile, otp);
      res.json(data);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  /* ------------- Token Refresh ------------- */
  async refreshSession(req, res) {
    try {
      const { refreshToken } = req.body;
      const tokens = await service.refreshSession(refreshToken);
      res.json(tokens);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  /* ------------- Logout ------------- */
  async logout(req, res) {
    try {
      const { refreshToken } = req.body;
      const result = await service.logoutSingle(req.user.id, refreshToken);
      res.json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async logoutAll(req, res) {
    try {
      const result = await service.logoutAll(req.user.id);
      res.json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

export const customerController = new CustomerController();
