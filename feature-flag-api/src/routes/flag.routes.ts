import express from 'express';
// import { authenticateToken } from '../middleware/auth.middleware';

import {
  createFlag,
  getAllFlags,
  evaluateFlag,
  toggleFlag,
  deleteFlag,
  bulkUpdateFlags,
  initializeDefaultFlags
} from '../controllers/flag.controller';

const router = express.Router();

// Initialize route should come before the parameterized routes
router.post('/initialize', initializeDefaultFlags); // Initialize default flags
router.put('/bulk/update', bulkUpdateFlags);     // Bulk update flags

// Temporarily remove auth for testing
router.post('/', createFlag);                    // Create new flag
router.get('/', getAllFlags);                    // Get all flags
router.get('/:name', evaluateFlag);              // Evaluate flag by name
router.put('/:id', toggleFlag);                  // Toggle flag status
router.delete('/:id', deleteFlag);               // Delete flag

export default router;

