import { Router } from 'express';
import { authController } from '../../use-cases/auth';

const authRoutes = Router();

authRoutes.post('/', (req, res) => authController.handle(req, res));

export { authRoutes };
