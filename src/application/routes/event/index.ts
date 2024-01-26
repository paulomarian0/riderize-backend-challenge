import { Router } from 'express';
import { createEventController } from '../../use-cases/event/create-event';
import { deleteEventController } from '../../use-cases/event/delete-event';

const eventRoutes = Router();

eventRoutes.post('/register', (req, res) => createEventController.handle(req, res));
eventRoutes.delete('/unregister/:id', (req, res) => deleteEventController.handle(req, res));

export { eventRoutes };
