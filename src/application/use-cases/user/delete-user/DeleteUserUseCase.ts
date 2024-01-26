import AppError from '../../../adapter/error';
import { IUserRepository } from '../../../repositories/user/IUserRepository';

export class DeleteUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string): Promise<void> {
    await this.validate(id);

    await this.userRepository.delete(id);
  }

  async validate(id: string) {
    const findById = await this.userRepository.find({ id });

    if (!findById) {
      throw new AppError({
        title: 'User not found',
        message: 'User was not found, please check your data',
        statusCode: 404,
      });
    }
  }
}
