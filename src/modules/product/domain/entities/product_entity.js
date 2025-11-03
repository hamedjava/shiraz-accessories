// src/modules/store/products/domain/entities/product_entity.js

// ⚙️ موجودیت (Entity) محصول - تعریف ساختار و قوانین اعتبارسنجی داده‌ها
export class ProductEntity {
    constructor({
      product_id,
      name,
      description,
      price,
      category,
      brand,
      stock,
      is_active = true,
      images = [],
      seller_id
    }) {
      this.product_id = product_id;
      this.name = name;
      this.description = description;
      this.price = price;
      this.category = category;
      this.brand = brand;
      this.stock = stock;
      this.is_active = is_active;
      this.images = images;
      this.seller_id = seller_id;
    }
  
    // ✅ متد بررسی درست بودن داده‌ها
    validate() {
      if (!this.name) throw new Error("نام محصول الزامی است");
      if (this.price === undefined || this.price <= 0)
        throw new Error("قیمت محصول باید بزرگ‌تر از صفر باشد");
      if (!this.seller_id)
        throw new Error("شناسه فروشنده (seller_id) الزامی است");
      return true;
    }
  }
  