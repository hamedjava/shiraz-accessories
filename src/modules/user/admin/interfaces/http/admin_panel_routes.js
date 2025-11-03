// ================================================================
// 📁 src/modules/user/admin/interfaces/http/admin_panel_routes.js
// ================================================================

import express from "express";
import * as admin_panel_controller from "../../../admin/interfaces/controllers/admin_panel_controller.js";

// 🟢 ایمپورت‌های امنیتی — مطابق استاندارد ESM و رفع خطاهای قبلی
import { authenticateAdmin } from "../../../../../core/middlewares/authenticateAdmin.js";
import { checkRole } from "../../../../../core/middlewares/roleMiddleware.js";
//  ↑ اگر در فایل‌های میدل‌ور از "export default" استفاده شده باشد
//    می‌توانی آکولادها را حذف کنی و فقط بنویسی:
//    import authenticateAdmin from "...";
//    import checkRole from "...";
//    ولی از ارورهای قبلی مشخص بود که exportها named هستند، پس این نسخه درست است.

const router = express.Router();

/* ================================================================
   📊 داشبورد (مسیر ایمن + نقش‌سنجی)
================================================================ */
router.get(
  "/dashboard",
  authenticateAdmin,
  checkRole(["superAdmin", "manager", "support"]),
  admin_panel_controller.get_dashboard_data
);

/* ================================================================
   👥 کاربران
================================================================ */
// دریافت تمام کاربران (ویژه SuperAdmin, Manager, Support)
router.get(
   "/users",
   authenticateAdmin,
   checkRole(["superadmin", "manager", "support"]),
   async (req, res, next) => {
     try {
       const adminId = req.admin?.id;
       const users = await getAllUsers(req, res, next, adminId);
       return users;
     } catch (error) {
       next(error);
     }
   }
 );
// تغییر وضعیت کاربر (block / unblock)
router.patch(
   "/users/:id/status",
   authenticateAdmin,
   checkRole(["superadmin", "manager"]),
   async (req, res, next) => {
     try {
       await changeUserStatus(req, res, next);
     } catch (error) {
       next(error);
     }
   }
 );
router.put("/users/:id/block", admin_panel_controller.block_user);
router.put("/users/:id/unblock", admin_panel_controller.unblock_user);
// حذف کاربر
router.delete(
   "/users/:id",
   authenticateAdmin,
   checkRole(["superadmin"]),
   async (req, res, next) => {
     try {
       await deleteUserByAdmin(req, res, next);
     } catch (error) {
       next(error);
     }
   }
 );

/* ================================================================
   🧾 فروشندگان
================================================================ */
router.get("/sellers", admin_panel_controller.get_all_sellers);
router.put("/sellers/:id/verify", admin_panel_controller.verify_seller);

/* ================================================================
   🛍️ محصولات
================================================================ */
router.get("/products", admin_panel_controller.get_all_products);
router.put("/products/:id", admin_panel_controller.update_product);
router.delete("/products/:id", admin_panel_controller.delete_product);

/* ================================================================
   📦 سفارشات
================================================================ */
router.get("/orders", admin_panel_controller.get_all_orders);
router.put("/orders/:id/status", admin_panel_controller.change_order_status);

/* ================================================================
   🏷️ دسته‌بندی‌ها
================================================================ */
router.get("/categories", admin_panel_controller.get_all_categories);
router.post("/categories", admin_panel_controller.create_category);
router.put("/categories/:id", admin_panel_controller.update_category);
router.delete("/categories/:id", admin_panel_controller.remove_category);

export default router;
