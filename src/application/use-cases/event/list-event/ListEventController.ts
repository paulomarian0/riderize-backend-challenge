import { ListEventUseCase } from './ListEventUseCase';
import { Request, Response } from 'express';

export class ListEventController {
  constructor(private listEventUseCase: ListEventUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, ride_id, user_id, subscription_date } = request.query as {
      id: string;
      ride_id: string;
      user_id: string;
      subscription_date: string;
    };

    const events = await this.listEventUseCase.execute({
      id,
      ride_id,
      user_id,
      subscription_date,
    });

    return response.json(events);
  }
}
