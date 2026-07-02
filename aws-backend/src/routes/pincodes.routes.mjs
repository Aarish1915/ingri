import express from 'express';
import { getPincodes, addPincode, deletePincode, checkPincode } from '../controllers/pincodes.controller.mjs';

const router = express.Router();

// Public route
router.get('/check', checkPincode);

// Admin routes
router.get('/', getPincodes);
router.post('/', addPincode);
router.delete('/:id', deletePincode);

export default router;
