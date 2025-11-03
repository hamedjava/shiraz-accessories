// src/modules/store/products/application/services/product_service.js
import * as product_usecases from "../../domain/usecases/product_usecases.js";
import { ProductRepositoryImpl } from "../../infrastructure/database/product_repository_impl.js";

// 🧠 لایه سرویس برای مدیریت وابستگی و اجرای UseCaseها
const repo = new ProductRepositoryImpl();

export async function create_product(data) {
  return await product_usecases.create_product(repo, data);
}

export async function update_product(id, data) {
  return await product_usecases.update_product(repo, id, data);
}

export async function delete_product(id) {
  return await product_usecases.delete_product(repo, id);
}

export async function get_product_by_id(id) {
  return await product_usecases.get_product_by_id(repo, id);
}

export async function get_all_products(filters) {
  return await product_usecases.get_all_products(repo, filters);
}

export async function get_products_by_seller(seller_id) {
  return await product_usecases.get_products_by_seller(repo, seller_id);
}
