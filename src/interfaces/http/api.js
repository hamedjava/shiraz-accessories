import express from 'express';
import customerRoutes from '../../modules/user/customer/interfaces/http/customerRoutes.js';
const router = express.Router();

router.use('/customers', customerRoutes);
router.get('/', (req, res) => res.json({ message: '✅ API فعال است' }));

export default router;
