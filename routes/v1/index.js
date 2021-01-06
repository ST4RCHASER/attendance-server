import express from 'express';
import { users } from './api/index.js';
const router = express.Router();
router.use('/users', users);
router.get('/', async (_, res) => {
    return res.status(200).json({
        success: true,
        code: 201,
        message: 'Welcome to attendance (v1) project!',
    })
});

export default router;