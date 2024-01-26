import { DeleteEventUseCase } from './DeleteEventUseCase';
import { Request, Response } from 'express';

export class DeleteEventController {
  constructor(private deleteEventUseCase: DeleteEventUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    await this.deleteEventUseCase.execute(id);

    return response.json({ message: 'Event deleted successfully!' });
  }
}
