import { Router } from 'express';
import { listRideController } from '../../../use-cases/ride/list-ride';
import { createRideController } from '../../../use-cases/ride/create-ride';
import { updateRideController } from '../../../use-cases/ride/update-ride';
import { deleteRideController } from '../../../use-cases/ride/delete-ride';

const rideRoutes = Router();

rideRoutes.post('/', (req, res) => createRideController.handle(req, res));
rideRoutes.get('/', (req, res) => listRideController.handle(req, res));
rideRoutes.put('/:id', (req, res) => updateRideController.handle(req, res));
rideRoutes.delete('/:id', (req, res) => deleteRideController.handle(req, res));

export { rideRoutes };
