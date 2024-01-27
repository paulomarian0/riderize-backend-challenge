import { randomUUID } from 'crypto';
import { ICreateUserDTO } from '../../application/dtos/user/ICreateUserDTO';
import { User } from '../../application/entities/User';
import { IUserRepository } from '../../application/repositories/user/IUserRepository';
import { IListUsersDTO } from '../../application/dtos/user/IListUsersDTO';
import { IUpdateUserDTO } from '../../application/dtos/user/IUpdateUserDTO';

export class InMemoryUserRepository implements IUserRepository {
  private users: any[] = [];

  async create(userData: ICreateUserDTO) {
    const user = {
      id: randomUUID(),
      name: userData.name,
      email: userData.email,
    };

    this.users.push(user);

    return user as User;
  }

  async count({ id, name, email }: IListUsersDTO) {
    return this.users.filter((user) => (!id || user.id === id) && (!name || user.name === name) && (!email || user.email === email)).length;
  }

  async find({ id, name, email }: IListUsersDTO) {
    return this.users.find((user) => (!id || user.id === id) && (!name || user.name === name) && (!email || user.email === email));
  }

  async list({ id, name, email }: IListUsersDTO) {
    return this.users.filter((user) => (!id || user.id === id) && (!name || user.name === name) && (!email || user.email === email));
  }

  async update({ id, name, email }: IUpdateUserDTO) {
    const userIndex = this.users.findIndex((user) => user.id === id);

    this.users[userIndex].name = name;
    this.users[userIndex].email = email;

    return this.users[userIndex];
  }

  async delete(id: string) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    this.users.splice(userIndex, 1);

    return this.users[userIndex];
  }
}
