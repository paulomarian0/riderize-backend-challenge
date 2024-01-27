import AppError from '../../../adapter/error';
import { ICreateUserDTO, createUserSchemaZodValidator } from '../../../dtos/user/ICreateUserDTO';
import { IUserRepository } from '../../../repositories/user/IUserRepository';

interface IExecute extends ICreateUserDTO {}

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ name, email }: IExecute) {
    createUserSchemaZodValidator.parse({ name, email });

    await this.validate({ name, email });
    return await this.userRepository.create({ name, email });
  }

  async validate({ email }: IExecute) {
    const findByEmail = await this.userRepository.find({ email });

    if (findByEmail) {
      throw new AppError({
        title: 'User already exists',
        message: 'Already have a user with this email',
        statusCode: 409,
      });
    }
  }
}
