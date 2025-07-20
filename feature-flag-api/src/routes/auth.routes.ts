import express from 'express';
import {
  register,
  login,
  verifyToken,
  getProfile,
  createDefaultAdmin
} from '../controllers/auth.controller';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/verify-token', verifyToken);
router.get('/profile', getProfile);
router.post('/create-default-admin', createDefaultAdmin);

export default router;
