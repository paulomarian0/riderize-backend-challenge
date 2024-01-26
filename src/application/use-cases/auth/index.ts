import { AuthController } from './AuthController';
import { AuthUseCase } from './AuthUseCase';

const authUseCase = new AuthUseCase();

const controller = new AuthController(authUseCase);

export { controller as authController };
