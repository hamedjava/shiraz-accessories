// src/modules/store/products/domain/repository/product_repository.js

// 🧠 قرارداد (Interface) بین لایه دامنه و دیتابیس
export class ProductRepository {
    async create(product_entity) {
      throw new Error("این متد پیاده‌سازی نشده است");
    }
  
    async update(product_id, changes) {
      throw new Error("این متد پیاده‌سازی نشده است");
    }
  
    async delete(product_id) {
      throw new Error("این متد پیاده‌سازی نشده است");
    }
  
    async find_by_product_id(product_id) {
      throw new Error("این متد پیاده‌سازی نشده است");
    }
  
    async find_all(filters) {
      throw new Error("این متد پیاده‌سازی نشده است");
    }
  }
  