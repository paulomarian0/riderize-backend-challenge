import { DeleteUserUseCase } from './DeleteUserUseCase';
import { Request, Response } from 'express';

export class DeleteUserController {
  constructor(private readonly deleteUserUseCase: DeleteUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    await this.deleteUserUseCase.execute(id);

    return response.json({ message: 'User deleted successfully!' });
  }
}
