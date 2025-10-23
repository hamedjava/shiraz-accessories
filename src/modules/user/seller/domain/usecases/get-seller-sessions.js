export class GetSellerSessionsUseCase {
    constructor(repository) {
      this.repository = repository;
    }
  
    async execute(sellerId) {
      if (!sellerId) throw new Error("شناسه فروشنده الزامی است.");
  
      const sessions = await this.repository.getSessions(sellerId);
  
      return {
        success: true,
        message: "نشست‌های فعال فروشنده دریافت شد.",
        data: {
          sellerId,
          sessions,
        },
      };
    }
  }
  