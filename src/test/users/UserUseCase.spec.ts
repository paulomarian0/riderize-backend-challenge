import { describe, test, expect } from 'vitest';
import { InMemoryUserRepository } from './user-memory-repository';
import { CreateUserUseCase } from '../../application/use-cases/user/create-user/CreateUserUseCase';
import { DeleteUserUseCase } from '../../application/use-cases/user/delete-user/DeleteUserUseCase';
import { UpdateUserUseCase } from '../../application/use-cases/user/update-user/UpdateUserUseCase';
import { ListUserUseCase } from '../../application/use-cases/user/list-user/ListUserUseCase';
import { ICreateUserDTO } from '../../application/dtos/user/ICreateUserDTO';
import { IUpdateUserDTO } from '../../application/dtos/user/IUpdateUserDTO';

describe('user use case tests', () => {
  const userRepository = new InMemoryUserRepository();

  test('should create a new user', async () => {
    const createUserUseCase = new CreateUserUseCase(userRepository);

    const userData: ICreateUserDTO = {
      name: 'teste',
      email: 'teste@gmail.com',
    };

    const result = await createUserUseCase.execute(userData);

    expect(result.name).toBe(userData.name);
  });

  test('list users', async () => {
    const listUserUseCase = new ListUserUseCase(userRepository);

    const { data, count } = await listUserUseCase.execute({});

    expect(data).toHaveLength(count);
  });

  test('update users', async () => {
    const updateUserUseCase = new UpdateUserUseCase(userRepository);

    const createUserData: ICreateUserDTO = {
      name: 'teste',
      email: 'teste@gmail.com',
    };

    const user = await userRepository.create(createUserData);

    const updateUserData: IUpdateUserDTO = {
      id: user.id,
      name: 'teste update',
      email: 'testeupdate@gmail.com',
    };

    const result = await updateUserUseCase.execute(updateUserData);

    expect(result.name).toBe('teste update');
  });

  test('delete users', async () => {
    const deleteUserUseCase = new DeleteUserUseCase(userRepository);

    const userData: ICreateUserDTO = {
      name: 'teste',
      email: '',
    };

    const user = await userRepository.create(userData);

    const result = await deleteUserUseCase.execute(user.id);

    expect(result).toBeUndefined();
  });
});
