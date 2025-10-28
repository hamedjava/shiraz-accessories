import { sellerRepository } from "../../../seller/infrastructure/repositories/seller-repository.js";

export class GetAllSellersUseCase {
  async execute(adminId) {
    const sellers =
      typeof sellerRepository.getAll === "function"
        ? await sellerRepository.getAll()
        : await sellerRepository.findAll();
    return { success: true, sellers };
  }
}
