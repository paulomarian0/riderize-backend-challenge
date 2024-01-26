import { DeleteRideUseCase } from './DeleteRideUseCase';
import { Request, Response } from 'express';

export class DeleteRideController {
  constructor(private deleteRideUseCase: DeleteRideUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    await this.deleteRideUseCase.execute(id);

    return response.json({ message: 'Ride deleted successfully!' });
  }
}
