import AppError from '../../../adapter/error';
import { IUpdateUserDTO, updateUserSchemaZodValidator } from '../../../dtos/user/IUpdateUserDTO';
import { IUserRepository } from '../../../repositories/user/IUserRepository';

interface IExecute extends IUpdateUserDTO {}

export class UpdateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ id, name, email }: IExecute) {
    updateUserSchemaZodValidator.parse({ id, name, email });

    await this.validate({ id, name, email });
    return await this.userRepository.update({ id, name, email });
  }

  async validate({ id, name, email }: IExecute) {
    const findById = await this.userRepository.find({ id });
    const findByName = await this.userRepository.find({ name });
    const findByEmail = await this.userRepository.find({ email });

    if (!findById) {
      throw new AppError({
        title: 'User not found',
        message: 'User was not found, please check your data',
        statusCode: 404,
      });
    }

    if (findByName) {
      throw new AppError({
        title: 'User already exists',
        message: 'Already have a user with this name',
        statusCode: 409,
      });
    }

    if (findByEmail) {
      throw new AppError({
        title: 'User already exists',
        message: 'Already have a user with this email',
        statusCode: 409,
      });
    }
  }
}
