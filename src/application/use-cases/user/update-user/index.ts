import { UserRepositoryImplementation } from '../../../repositories/user/implementation/UserRepositoryImplementation';
import { UpdateUserController } from './UpdateUserController';
import { UpdateUserUseCase } from './UpdateUserUseCase';

const userRepository = new UserRepositoryImplementation();

const useCase = new UpdateUserUseCase(userRepository);

const controller = new UpdateUserController(useCase);

export { controller as updateUserController };
