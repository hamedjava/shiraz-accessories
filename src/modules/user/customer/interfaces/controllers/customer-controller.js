// interfaces/controllers/customer-controller.js
import { customerServiceInstance } from "../../application/services/customer-service.js";

export class CustomerController {
  async registerMobile(req, res) {
    try {
      const { mobile, name } = req.body;
      const result = await customerServiceInstance.registerWithMobile(mobile, name);
      res.status(200).json(result);
    } catch (err) { res.status(400).json({ success: false, message: err.message }); }
  }

  async registerEmail(req, res) {
    try {
      const { email, password, name } = req.body;
      const result = await customerServiceInstance.registerWithEmail(email, password, name);
      res.status(200).json(result);
    } catch (err) { res.status(400).json({ success: false, message: err.message }); }
  }

  async loginMobileOtp(req, res) {
    try {
      const { mobile, otpCode } = req.body;
      const result = await customerServiceInstance.loginWithMobileOtp(mobile, otpCode);
      res.status(200).json(result);
    } catch (err) { res.status(400).json({ success: false, message: err.message }); }
  }

  async loginEmailPassword(req, res) {
    try {
      const { email, password } = req.body;
      const result = await customerServiceInstance.loginWithEmailPassword(email, password);
      res.status(200).json(result);
    } catch (err) { res.status(400).json({ success: false, message: err.message }); }
  }

  async profile(req, res) {
    try {
      const result = await customerServiceInstance.getProfile(req.user.id);
      res.status(200).json(result);
    } catch (err) { res.status(400).json({ success: false, message: err.message }); }
  }

  async updateProfile(req, res) {
    try {
      if (req.user.id !== req.body.id) return res.status(403).json({ success: false, message: "دسترسی ندارید." });
      const result = await customerServiceInstance.updateProfile(req.user.id, req.body);
      res.status(200).json(result);
    } catch (err) { res.status(400).json({ success: false, message: err.message }); }
  }

  async getAll(req, res) {
    try {
      const result = await customerServiceInstance.getAllCustomers();
      res.status(200).json(result);
    } catch (err) { res.status(400).json({ success: false, message: err.message }); }
  }

  async getOne(req, res) {
    try {
      const result = await customerServiceInstance.getCustomer(req.params.id);
      res.status(200).json(result);
    } catch (err) { res.status(400).json({ success: false, message: err.message }); }
  }

  async deleteOne(req, res) {
    try {
      const result = await customerServiceInstance.deleteCustomer(req.params.id);
      res.status(200).json(result);
    } catch (err) { res.status(400).json({ success: false, message: err.message }); }
  }

  async logout(req, res) {
    try {
      const { refreshToken } = req.body;
      const result = await customerServiceInstance.logout(req.user.id, refreshToken);
      res.status(200).json(result);
    } catch (err) { res.status(400).json({ success: false, message: err.message }); }
  }
}

export const customerControllerInstance = new CustomerController();
