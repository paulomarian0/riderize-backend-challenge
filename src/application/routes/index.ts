import { Router } from 'express';
import { rideRoutes } from './ride/ride-routes';
import { userRoutes } from './users/user-routes';
import { eventRoutes } from './event';

const appRoutes = Router();

appRoutes.use('/ride', rideRoutes);
appRoutes.use('/user', userRoutes);
appRoutes.use('/event', eventRoutes);

export { appRoutes };
