import { Router } from 'express';
import { createUserController } from '../../use-cases/user/create-user';
import { listUserController } from '../../use-cases/user/list-user';
import { updateUserController } from '../../use-cases/user/update-user';
import { deleteUserController } from '../../use-cases/user/delete-user';

const userRoutes = Router();

userRoutes.post('/', (req, res) => createUserController.handle(req, res));
userRoutes.get('/', (req, res) => listUserController.handle(req, res));
userRoutes.put('/:id', (req, res) => updateUserController.handle(req, res));
userRoutes.delete('/:id', (req, res) => deleteUserController.handle(req, res));

export { userRoutes };
