import { UserRepositoryImplementation } from '../../../repositories/user/implementation/UserRepositoryImplementation';
import { ListUserController } from './ListUserController';
import { ListUserUseCase } from './ListUserUseCase';

const userRepository = new UserRepositoryImplementation();

const useCase = new ListUserUseCase(userRepository);

const controller = new ListUserController(useCase);

export { controller as listUserController };
