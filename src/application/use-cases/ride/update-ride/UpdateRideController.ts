import { UpdateRideUseCase } from './UpdateRideUseCase';
import { Request, Response } from 'express';

export class UpdateRideController {
  constructor(private updateRideUseCase: UpdateRideUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, start_place, additional_information, participants_limit } = request.body;

    await this.updateRideUseCase.execute({
      id,
      name,
      start_place,
      additional_information,
      participants_limit,
    });

    return response.json({ message: 'Ride updated successfully!' });
  }
}
