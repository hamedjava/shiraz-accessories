export class LogoutSellerUseCase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute({ sellerId, refreshToken }) {
    if (!sellerId || !refreshToken) {
      throw new Error("شناسه فروشنده و توکن الزامی هستند.");
    }

    const seller = await this.repository.getFullById(sellerId);
    if (!seller) throw new Error("فروشنده یافت نشد.");

    const exists = seller.refreshTokens && seller.refreshTokens.includes(refreshToken);
    if (!exists) throw new Error("توکن معتبر یافت نشد یا قبلاً خروج انجام شده است.");

    await this.repository.removeSession(sellerId, refreshToken);

    return {
      success: true,
      message: "خروج با موفقیت انجام شد.",
    };
  }
}
