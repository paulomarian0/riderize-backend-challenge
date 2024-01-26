import { ICreateUserDTO } from '../../../dtos/user/ICreateUserDTO';
import { IUserRepository } from '../../../repositories/user/IUserRepository';

interface IExecute extends ICreateUserDTO {}

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ name, email }: IExecute) {
    await this.userRepository.create({ name, email });
  }
}
