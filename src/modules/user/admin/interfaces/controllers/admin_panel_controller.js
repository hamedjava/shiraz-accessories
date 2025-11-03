import * as admin_service from "../../../admin/application/services/adminService.js";

/* ================================================================
   📊 داشبورد
================================================================ */
export async function get_dashboard_data(req, res, next) {
  try {
    const data = await admin_service.getDashboardStats();
    res.status(200).json({ موفق: true, پیام: "اطلاعات داشبورد دریافت شد.", داده: data });
  } catch (err) {
    next(err);
  }
}

/* ================================================================
   👥 کاربران
================================================================ */
export async function get_all_users(req, res, next) {
  try {
    const users = await admin_service.getAllUsers();
    res.status(200).json({ موفق: true, پیام: "کاربران دریافت شدند.", داده: users });
  } catch (err) {
    next(err);
  }
}

export async function change_user_status(req, res, next) {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const user = await admin_service.changeUserStatus(id, status);
    res.status(200).json({ موفق: true, پیام: "وضعیت کاربر تغییر یافت.", داده: user });
  } catch (err) {
    next(err);
  }
}

/* 🔹‌ افزودن جدید: بلاک کاربر */
export async function block_user(req, res, next) {
  try {
    const { id } = req.params;
    const user = await admin_service.changeUserStatus(id, "blocked");
    res.status(200).json({
      موفق: true,
      پیام: "کاربر با موفقیت بلاک شد.",
      داده: user,
    });
  } catch (err) {
    next(err);
  }
}

/* 🔹‌ افزودن جدید: آنبلاک کاربر */
export async function unblock_user(req, res, next) {
  try {
    const { id } = req.params;
    const user = await admin_service.changeUserStatus(id, "active");
    res.status(200).json({
      موفق: true,
      پیام: "کاربر با موفقیت آنبلاک شد.",
      داده: user,
    });
  } catch (err) {
    next(err);
  }
}

export async function delete_user(req, res, next) {
  try {
    const { id } = req.params;
    await admin_service.deleteUser(id);
    res.status(200).json({ موفق: true, پیام: "کاربر حذف شد." });
  } catch (err) {
    next(err);
  }
}

/* ================================================================
   🧾 فروشندگان
================================================================ */
export async function get_all_sellers(req, res, next) {
  try {
    const sellers = await admin_service.getAllSellers();
    res.status(200).json({ موفق: true, پیام: "فروشندگان دریافت شدند.", داده: sellers });
  } catch (err) {
    next(err);
  }
}

export async function verify_seller(req, res, next) {
  try {
    const { id } = req.params;
    const seller = await admin_service.verifySeller(id);
    res.status(200).json({ موفق: true, پیام: "فروشنده تأیید شد.", داده: seller });
  } catch (err) {
    next(err);
  }
}

/* ================================================================
   🛍️ محصولات
================================================================ */
export async function get_all_products(req, res, next) {
  try {
    const products = await admin_service.getAllProducts();
    res.status(200).json({ موفق: true, پیام: "محصولات دریافت شدند.", داده: products });
  } catch (err) {
    next(err);
  }
}

export async function update_product(req, res, next) {
  try {
    const { id } = req.params;
    const data = req.body;
    const product = await admin_service.updateProduct(id, data);
    res.status(200).json({ موفق: true, پیام: "محصول به‌روزرسانی شد.", داده: product });
  } catch (err) {
    next(err);
  }
}

export async function delete_product(req, res, next) {
  try {
    const { id } = req.params;
    await admin_service.deleteProduct(id);
    res.status(200).json({ موفق: true, پیام: "محصول حذف شد." });
  } catch (err) {
    next(err);
  }
}

/* ================================================================
   📦 سفارشات
================================================================ */
export async function get_all_orders(req, res, next) {
  try {
    const orders = await admin_service.getAllOrders();
    res.status(200).json({ موفق: true, پیام: "سفارشات دریافت شدند.", داده: orders });
  } catch (err) {
    next(err);
  }
}

export async function change_order_status(req, res, next) {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const order = await admin_service.changeOrderStatus(id, status);
    res.status(200).json({ موفق: true, پیام: "وضعیت سفارش تغییر یافت.", داده: order });
  } catch (err) {
    next(err);
  }
}

/* ================================================================
   🏷️ دسته‌بندی‌ها
================================================================ */
export async function get_all_categories(req, res, next) {
  try {
    const categories = await admin_service.getAllCategories();
    res.status(200).json({ موفق: true, پیام: "دسته‌بندی‌ها دریافت شدند.", داده: categories });
  } catch (err) {
    next(err);
  }
}

export async function create_category(req, res, next) {
  try {
    const data = req.body;
    const category = await admin_service.createCategory(data);
    res.status(201).json({ موفق: true, پیام: "دسته‌بندی ایجاد شد.", داده: category });
  } catch (err) {
    next(err);
  }
}

export async function update_category(req, res, next) {
  try {
    const { id } = req.params;
    const data = req.body;
    const category = await admin_service.updateCategory(id, data);
    res.status(200).json({ موفق: true, پیام: "دسته‌بندی به‌روزرسانی شد.", داده: category });
  } catch (err) {
    next(err);
  }
}

export async function remove_category(req, res, next) {
  try {
    const { id } = req.params;
    await admin_service.removeCategory(id);
    res.status(200).json({ موفق: true, پیام: "دسته‌بندی حذف شد." });
  } catch (err) {
    next(err);
  }
}
