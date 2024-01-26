import { IUpdateUserDTO } from '../../../dtos/user/IUpdateUserDTO';
import { IUserRepository } from '../../../repositories/user/IUserRepository';

interface IExecute extends IUpdateUserDTO {}

export class UpdateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ id, name, email }: IExecute) {
    await this.userRepository.update({ id, name, email });
  }
}
