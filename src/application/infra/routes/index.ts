import { Router } from 'express';
import { rideRoutes } from './ride/ride-routes';
import { userRoutes } from './users/user-routes';
import { eventRoutes } from './event';
import { authRoutes } from './auth';
import { AuthUseCase } from '../../use-cases/auth/AuthUseCase';
import AuthMiddleware from '../../infra/middlewares/auth';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './../../../swagger.json';

const appRoutes = Router();

const authService = new AuthUseCase();
const authMiddleware = new AuthMiddleware(authService);

appRoutes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
appRoutes.use('/auth', authRoutes);

appRoutes.use(authMiddleware.authenticateToken);
appRoutes.use('/ride', rideRoutes);
appRoutes.use('/user', userRoutes);
appRoutes.use('/event', eventRoutes);

export { appRoutes };
