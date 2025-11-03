// src/modules/admin/infrastructure/database/admin_repository_impl.js
import { UserModel } from "../../../user/infrastructure/database/user_model.js";
import { SellerModel } from "../../../seller/infrastructure/database/seller_model.js";
import { ProductModel } from "../../../product/infrastructure/database/product_model.js";
import { OrderModel } from "../../../order/infrastructure/database/order_model.js";

export class AdminRepositoryImpl {
  async get_dashboard_data() {
    return {
      تعداد_کاربران: await UserModel.countDocuments(),
      تعداد_فروشندگان: await SellerModel.countDocuments(),
      تعداد_محصولات: await ProductModel.countDocuments(),
      تعداد_سفارشات: await OrderModel.countDocuments(),
    };
  }

  async get_all_users() {
    return await UserModel.find().lean();
  }

  async change_user_status(id, status) {
    return await UserModel.findByIdAndUpdate(id, { status }, { new: true });
  }

  async delete_user(id) {
    return await UserModel.findByIdAndDelete(id);
  }

  async get_all_sellers() {
    return await SellerModel.find().lean();
  }

  async verify_seller(id) {
    return await SellerModel.findByIdAndUpdate(
      id,
      { verified: true },
      { new: true }
    ).lean();
  }

  async get_all_products() {
    return await ProductModel.find().lean();
  }

  async update_product(id, data) {
    return await ProductModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete_product(id) {
    return await ProductModel.findByIdAndDelete(id);
  }

  async get_all_orders() {
    return await OrderModel.find().lean();
  }

  async change_order_status(id, status) {
    return await OrderModel.findByIdAndUpdate(id, { status }, { new: true });
  }

  // اگر CategoryModel داری، همین‌جا:
  async get_all_categories() {
    return await CategoryModel.find().lean();
  }

  async create_category(data) {
    return await CategoryModel.create(data);
  }

  async update_category(id, data) {
    return await CategoryModel.findByIdAndUpdate(id, data, { new: true });
  }

  async remove_category(id) {
    return await CategoryModel.findByIdAndDelete(id);
  }
}
