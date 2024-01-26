import { ListUserUseCase } from './ListUserUseCase';
import { Request, Response } from 'express';

export class ListUserController {
  constructor(private readonly listUserUseCase: ListUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, name, email } = request.query as { id: string; name: string; email: string };

    const users = await this.listUserUseCase.execute({ id, name, email });

    return response.json(users);
  }
}
