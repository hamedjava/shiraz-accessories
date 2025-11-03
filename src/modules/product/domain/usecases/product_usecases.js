import { ProductEntity } from "../entities/product_entity.js";

/**
 * 🧠 ایجاد محصول جدید با اعتبارسنجی داده و seller_id
 * اگر seller_id وجود نداشته باشد، خطا می‌دهد.
 */
export async function create_product(repo, product_data) {
  if (!product_data.seller_id)
    throw new Error("شناسه فروشنده یا ادمین برای افزودن محصول الزامی است.");

  const product = new ProductEntity(product_data);
  product.validate();
  return await repo.create(product);
}

/**
 * ✏️ بروزرسانی محصول بر اساس شناسه MongoDB (_id)
 * بررسی می‌کند محصول وجود دارد، در غیر اینصورت خطا می‌دهد.
 */
export async function update_product(repo, product_id, changes) {
  // در نسخه اصلاح‌شده از find_by_id به جای find_by_product_id استفاده می‌کنیم
  const existing = await repo.find_by_id(product_id);
  if (!existing) throw new Error("محصول مورد نظر یافت نشد");

  return await repo.update(product_id, changes);
}

/**
 * ❌ حذف محصول بر اساس شناسه MongoDB (_id)
 * بررسی می‌کند محصول وجود دارد، در غیر اینصورت خطا می‌دهد.
 */
export async function delete_product(repo, product_id) {
  const existing = await repo.find_by_id(product_id);
  if (!existing) throw new Error("محصول مورد نظر یافت نشد");

  const deleted = await repo.delete(product_id);
  if (!deleted) throw new Error("محصول برای حذف یافت نشد");

  return deleted;
}

/**
 * 🔍 دریافت محصول بر اساس شناسه MongoDB (_id)
 */
export async function get_product_by_id(repo, product_id) {
  // استفاده از find_by_id برای اطمینان از جستجو با ObjectId
  const product = await repo.find_by_id(product_id);
  if (!product) throw new Error("محصول مورد نظر یافت نشد");

  return product;
}

/**
 * 📦 دریافت همه محصولات با فیلتر اختیاری
 */
export async function get_all_products(repo, filters = {}) {
  return await repo.find_all(filters);
}

/**
 * 🧑‍💼 دریافت محصولات یک فروشنده خاص بر اساس seller_id
 */
export async function get_products_by_seller(repo, seller_id) {
  return await repo.find_all({ seller_id });
}
