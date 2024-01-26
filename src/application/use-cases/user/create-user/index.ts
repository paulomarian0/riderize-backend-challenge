import { UserRepositoryImplementation } from '../../../repositories/user/implementation/UserRepositoryImplementation';
import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';

const userRepository = new UserRepositoryImplementation();

const useCase = new CreateUserUseCase(userRepository);

const controller = new CreateUserController(useCase);

export { controller as createUserController };
