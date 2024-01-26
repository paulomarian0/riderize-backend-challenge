import { CreateRideUseCase } from './CreateRideUseCase';
import { Request, Response } from 'express';

export class CreateRideController {
  constructor(private createRideUseCase: CreateRideUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, start_date, start_date_registration, end_date_registration, additional_information, start_place, participants_limit } =
      request.body;

    await this.createRideUseCase.execute({
      name,
      start_date,
      start_date_registration,
      end_date_registration,
      additional_information,
      start_place,
      participants_limit,
    });

    return response.json({ message: 'Ride created successfully!' });
  }
}
