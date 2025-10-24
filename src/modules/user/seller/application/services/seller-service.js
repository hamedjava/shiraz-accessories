console.log("✅ seller-service.js loaded from", import.meta.url);

import { SellerRepository } from "../../infrastructure/repositories/seller-repository.js";
import { RegisterSellerUseCase } from "../../../seller/domain/usecases/register-seller.js";
import { LoginWithEmailUseCase } from "../../../seller/domain/usecases/login-with-email.js";
import { LoginWithOTPUseCase } from "../../../seller/domain/usecases/login-with-otp.js";
import { LogoutSellerUseCase } from "../../../seller/domain/usecases/logout-seller.js";
import { GetSellerSessionsUseCase } from "../../../seller/domain/usecases/get-seller-sessions.js";

import { TokenManager } from "../../../seller/infrastructure/Security/token-manager.js";
import { otpServiceInstance } from "../../../seller/infrastructure/Security/otp-service.js";

// ❌ بدون export اینجا؛ کلاس فقط تعریف می‌شود
class SellerService {
  constructor() {
    this.repository = new SellerRepository();
    this.otpService = otpServiceInstance; // Singleton instance
    this.tokenManager = new TokenManager();
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
    const useCase = new LoginWithOTPUseCase(this.repository, this.otpService, this.tokenManager);
    return await useCase.sendCode(mobile);
  }

  async verifyOtp({ mobile, otpCode }) {
    const useCase = new LoginWithOTPUseCase(this.repository, this.otpService, this.tokenManager);
    return await useCase.verifyCode({ mobile, otpCode });
  }

  async logoutSeller({ sellerId, refreshToken }) {
    const useCase = new LogoutSellerUseCase(this.repository);
    return await useCase.execute({ sellerId, refreshToken });
  }

  async getSellerSessions(sellerId) {
    const useCase = new GetSellerSessionsUseCase(this.repository);
    return await useCase.execute(sellerId);
  }
}

// ✅ فقط یک export از کلاس و یک export از instance
export { SellerService };
export const sellerServiceInstance = new SellerService();
