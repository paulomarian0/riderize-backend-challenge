import { Router } from 'express';
import { rideRoutes } from './ride/ride-routes';
import { userRoutes } from './users/user-routes';
import { eventRoutes } from './event';
import { authRoutes } from './auth';
import { AuthUseCase } from '../../use-cases/auth/AuthUseCase';
import AuthMiddleware from '../../infra/middlewares/auth';

const appRoutes = Router();

const authService = new AuthUseCase();
const authMiddleware = new AuthMiddleware(authService);

appRoutes.use('/auth', authRoutes);

appRoutes.use(authMiddleware.authenticateToken);
appRoutes.use('/ride', rideRoutes);
appRoutes.use('/user', userRoutes);
appRoutes.use('/event', eventRoutes);

export { appRoutes };
