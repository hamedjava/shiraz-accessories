import express from 'express';
import * as controller from '../controllers/customerController.js';
const router = express.Router();

router.get('/', controller.getAll);
export default router;
