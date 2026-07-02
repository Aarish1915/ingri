import { Router } from 'express';
import { adminLogin, getAdminProfile, getDashboardStats, getAdminUsers, getAdminOrders, getAdminReviews, getAdminInquiries } from '../controllers/admin.controller.mjs';

import { requireAdmin } from '../middlewares/auth.middleware.mjs';

const router = Router();

router.post('/login', adminLogin);

// Protected Routes
router.get('/me', requireAdmin, getAdminProfile);
router.get('/dashboard', requireAdmin, getDashboardStats);
router.get('/users', requireAdmin, getAdminUsers);
router.get('/orders', requireAdmin, getAdminOrders);
router.get('/reviews', requireAdmin, getAdminReviews);
router.get('/inquiries', requireAdmin, getAdminInquiries);

export default router;
