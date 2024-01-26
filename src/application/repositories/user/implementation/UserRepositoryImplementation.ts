import { databaseAdapter } from '../../../adapter/database';
import { ICreateUserDTO } from '../../../dtos/user/ICreateUserDTO';
import { IListUsersDTO } from '../../../dtos/user/IListUsersDTO';
import { IUpdateUserDTO } from '../../../dtos/user/IUpdateUserDTO';
import { IUserRepository } from '../IUserRepository';

export class UserRepositoryImplementation implements IUserRepository {
  private repository: typeof databaseAdapter;

  constructor() {
    this.repository = databaseAdapter;
  }

  async create({ name, email }: ICreateUserDTO) {
    await this.repository.user.create({
      data: {
        name,
        email,
      },
    });
  }

  async count({ id, email, name }: IListUsersDTO) {
    return await this.repository.user.count({
      where: {
        id,
        email,
        name,
      },
    });
  }

  async find({ id, email, name }: IListUsersDTO) {
    return await this.repository.user.findUnique({
      where: {
        id,
        email,
        name,
      },
    });
  }

  async list({ id, email, name }: IListUsersDTO) {
    return await this.repository.user.findMany({
      where: {
        id: id ? { equals: id } : undefined,
        email: email ? { contains: email } : undefined,
        name: name ? { contains: name } : undefined,
      },
    });
  }

  async update({ id, name, email }: IUpdateUserDTO) {
    await this.repository.user.update({
      where: { id },
      data: {
        name,
        email,
      },
    });
  }

  async delete(id: string) {
    await this.repository.ride.delete({
      where: {
        id,
      },
    });
  }
}
