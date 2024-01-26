import { IEventRepository } from '../../../repositories/event/IEventRepository';

export class DeleteEventUseCase {
  constructor(private eventRepository: IEventRepository) {}

  async execute(id: string): Promise<void> {
    await this.eventRepository.delete(id);
  }
}
