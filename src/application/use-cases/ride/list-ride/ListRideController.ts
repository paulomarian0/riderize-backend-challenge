import { ListRideUseCase } from './ListRideUseCase';
import { Request, Response } from 'express';
export class ListRideController {
  constructor(private listRideUseCase: ListRideUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, name, start_date } = request.query as unknown as { id: string; name: string; start_date: Date };

    await this.listRideUseCase.execute({ id, name, start_date });

    return response.json({ message: 'User created successfully!' });
  }
}
