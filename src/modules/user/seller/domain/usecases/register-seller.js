import { SellerEntity } from "../../domain/entities/seller-entity.js";

export class RegisterSellerUseCase {
  constructor(sellerRepository) {
    this.repository = sellerRepository;
  }

  async execute(data) {
    const { name, email, mobile, password, storeName } = data;

    if (!name || !email || !mobile || !password || !storeName) {
      throw new Error("تمام فیلدهای الزامی باید ارسال شوند.");
    }

    const duplicate = await this.repository.findDuplicate(email, mobile);
    if (duplicate) {
      throw new Error("این ایمیل یا شماره موبایل قبلاً ثبت شده است.");
    }

    const sellerEntity = new SellerEntity({
      name,
      email: email.toLowerCase(),
      mobile,
      password, // هش در مدل انجام می‌شود
      storeName,
      role: "pending_seller",
      isVerified: false,
    });

    const savedSeller = await this.repository.create(sellerEntity);

    return {
      success: true,
      message: "فروشنده با موفقیت ثبت شد. منتظر تأیید مدیر باشید.",
      data: savedSeller.toJSON(),
    };
  }
}
