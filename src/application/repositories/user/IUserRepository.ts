import { ICreateUserDTO } from '../../dtos/user/ICreateUserDTO';
import { IListUsersDTO } from '../../dtos/user/IListUsersDTO';
import { IUpdateUserDTO } from '../../dtos/user/IUpdateUserDTO';
import { User } from '../../entities/User';

export interface IUserRepository {
  create(data: ICreateUserDTO): Promise<User>;
  count(data: IListUsersDTO): Promise<number>;
  find(data: IListUsersDTO): Promise<User | null>;
  list(data: IListUsersDTO): Promise<User[]>;
  update(data: IUpdateUserDTO): Promise<User>;
  delete(id: string): Promise<User>;
}
