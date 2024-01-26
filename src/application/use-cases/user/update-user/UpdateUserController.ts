import { UpdateUserUseCase } from './UpdateUserUseCase';
import { Request, Response } from 'express';

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    await this.updateUserUseCase.execute({ name, email });

    return response.json({ message: 'User updated successfully!' });
  }
}
