import { UserRepositoryImplementation } from '../../../repositories/user/implementation/UserRepositoryImplementation';
import { DeleteUserController } from './DeleteUserController';
import { DeleteUserUseCase } from './DeleteUserUseCase';

const userRepository = new UserRepositoryImplementation();

const useCase = new DeleteUserUseCase(userRepository);

const controller = new DeleteUserController(useCase);

export { controller as deleteUserController };
