import { IListUsersDTO, listUsersSchemaZodValidator } from '../../../dtos/user/IListUsersDTO';
import { IUserRepository } from '../../../repositories/user/IUserRepository';

interface IExecute extends IListUsersDTO {}

export class ListUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ id, name, email }: IExecute) {
    listUsersSchemaZodValidator.parse({ id, name, email });

    const users = await this.userRepository.list({ id, name, email });
    const count = await this.userRepository.count({ id, name, email });

    return { count, data: users };
  }
}
