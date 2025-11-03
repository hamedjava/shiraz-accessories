import express from "express";
import * as product_controller from "../../../product/interfaces/controllers/product_controller.js";
import { checkAdminOrSeller } from "../../../../common/productMiddleware/checkAdminOrSeller.js";

const router = express.Router();

// 🟦 مسیرهای عمومی برای کاربران (نمایش محصولات)
router.get("/", product_controller.get_all);
router.get("/:id", product_controller.get_one);
router.get("/seller/:seller_id", product_controller.get_by_seller);

// 🟥 مسیرهای محافظت‌شده برای ادمین‌ها یا فروشنده‌ها
router.post("/", checkAdminOrSeller, product_controller.create);
router.put("/:id", checkAdminOrSeller, product_controller.update);
router.delete("/:id", checkAdminOrSeller, product_controller.remove);

export default router;
