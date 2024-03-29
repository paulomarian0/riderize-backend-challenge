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
    return await this.repository.user.create({
      data: {
        name,
        email,
      },
    });
  }

  async count({ id, email, name }: IListUsersDTO) {
    return await this.repository.user.count({
      where: {
        id: id ? { equals: id } : undefined,
        email: email ? { contains: email } : undefined,
        name: name ? { contains: name } : undefined,
      },
    });
  }

  async find({ id, email, name }: IListUsersDTO) {
    return await this.repository.user.findFirst({
      where: {
        id: id ? { equals: id } : undefined,
        email: email ? { contains: email } : undefined,
        name: name ? { contains: name } : undefined,
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
      include: {
        ride_participant: {
          select: {
            id: true,
            subscription_date: true,
            ride: {
              select: {
                id: true,
                name: true,
              },
            },
            user: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });
  }

  async update({ id, name, email }: IUpdateUserDTO) {
    return await this.repository.user.update({
      where: { id },
      data: {
        name,
        email,
      },
    });
  }

  async delete(id: string) {
    return await this.repository.user.delete({
      where: {
        id,
      },
    });
  }
}
