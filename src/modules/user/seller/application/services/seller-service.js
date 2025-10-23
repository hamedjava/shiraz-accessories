import { SellerRepository } from "../../infrastructure/repositories/seller-repository.js";
import { RegisterSellerUseCase } from "../../../seller/domain/usecases/register-seller.js";
import { LoginWithEmailUseCase } from "../../../seller/domain/usecases/login-with-email.js";
import { LoginWithOTPUseCase } from "../../../seller/domain/usecases/login-with-otp.js";
import { LogoutSellerUseCase } from "../../../seller/domain/usecases/logout-seller.js";
import { GetSellerSessionsUseCase } from "../../../seller/domain/usecases/get-seller-sessions.js";
export class SellerService {
  constructor() {
    this.repository = new SellerRepository();
  }

  async register(data) {
    const useCase = new RegisterSellerUseCase(this.repository);
    return await useCase.execute(data);
  }

  async loginWithEmail({ email, password }) {
    const useCase = new LoginWithEmailUseCase(this.repository);
    return await useCase.execute({ email, password });
  }

  async sendOtp(mobile) {
    const useCase = new LoginWithOTPUseCase(this.repository);
    return await useCase.sendCode(mobile);
  }

  async verifyOtp({ mobile, otpCode }) {
    const useCase = new LoginWithOTPUseCase(this.repository);
    return await useCase.verifyCode({ mobile, otpCode });
  }

  /** 🟢 Logout فروشنده */
  async logoutSeller({ sellerId, refreshToken }) {
    const useCase = new LogoutSellerUseCase(this.repository);
    return await useCase.execute({ sellerId, refreshToken });
  }

  /** 📋 دریافت نشست‌های فعال */
  async getSellerSessions(sellerId) {
    const useCase = new GetSellerSessionsUseCase(this.repository);
    return await useCase.execute(sellerId);
  }
}
