import { CreateEventUseCase } from './CrateEventUseCase';
import { Request, Response } from 'express';

export class CreateEventController {
  constructor(private createEventUseCase: CreateEventUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { ride_id, user_id, subscription_date } = request.body;

    await this.createEventUseCase.execute({
      ride_id,
      user_id,
      subscription_date,
    });

    return response.json({ message: 'Event created successfully!' });
  }
}
