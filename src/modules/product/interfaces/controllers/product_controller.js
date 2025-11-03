import * as product_service from "../../application/services/product_service.js";

/**
 * 🎯 کنترلر مدیریت عملیات محصولات.
 * تغییرات:
 *   - بررسی نقش کاربر از req.user
 *   - تعیین seller_id بر اساس نقش
 *   - حفاظت از مسیر توسط middleware
 */

// 🟩 ایجاد محصول جدید توسط ادمین یا فروشنده
export async function create(req, res, next) {
  try {
    // شناسه کاربر از middleware (ادمین یا فروشنده)
    const userContext = req.user;
    const seller_id =
      userContext?.type === "seller"
        ? userContext.id
        : req.body.seller_id || userContext.id;

    // ادمین‌ها می‌توانند برای هر seller_id دلخواه محصول اضافه کنند
    const productData = { ...req.body, seller_id };

    const product = await product_service.create_product(productData);
    res.status(201).json({
      موفق: true,
      پیام: "محصول با موفقیت اضافه شد",
      داده: product,
    });
  } catch (err) {
    next(err);
  }
}

// 🟩 ویرایش محصول
export async function update(req, res, next) {
  try {
    const userContext = req.user;
    const product_id = req.params.id;

    // در حالت واقعی: ادمین‌ها مجاز به ویرایش همه هستند، seller فقط مجاز به محصولات خودش
    const product = await product_service.update_product(product_id, req.body);
    res.status(200).json({
      موفق: true,
      پیام: "محصول با موفقیت ویرایش شد",
      داده: product,
    });
  } catch (err) {
    next(err);
  }
}

// 🟩 حذف محصول
export async function remove(req, res, next) {
  try {
    const product_id = req.params.id;
    await product_service.delete_product(product_id);
    res.status(200).json({ موفق: true, پیام: "محصول با موفقیت حذف شد" });
  } catch (err) {
    next(err);
  }
}

// 🟦 دریافت محصول تکی
export async function get_one(req, res, next) {
  try {
    const product = await product_service.get_product_by_id(req.params.id);
    res.status(200).json({ موفق: true, داده: product });
  } catch (err) {
    next(err);
  }
}

// 🟦 دریافت همه محصولات
export async function get_all(req, res, next) {
  try {
    const products = await product_service.get_all_products(req.query);
    res.status(200).json({ موفق: true, داده: products });
  } catch (err) {
    next(err);
  }
}

// 🟦 دریافت بر اساس seller_id
export async function get_by_seller(req, res, next) {
  try {
    const products = await product_service.get_products_by_seller(
      req.params.seller_id
    );
    res.status(200).json({ موفق: true, داده: products });
  } catch (err) {
    next(err);
  }
}
