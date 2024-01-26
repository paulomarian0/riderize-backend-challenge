import { Router } from 'express';
import { rideRoutes } from './ride/ride-routes';
import { userRoutes } from './users/user-routes';

const appRoutes = Router();

appRoutes.use('/ride', rideRoutes);
appRoutes.use('/user', userRoutes);

export { appRoutes };
