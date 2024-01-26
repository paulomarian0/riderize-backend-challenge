import { ICreateEventDTO } from '../../../dtos/event/ICreateEvent';
import { IEventRepository } from '../../../repositories/event/IEventRepository';

interface IExecute extends ICreateEventDTO {}

export class CreateEventUseCase {
  constructor(private eventRepository: IEventRepository) {}

  async execute({ ride_id, user_id, subscription_date }: IExecute) {
    await this.eventRepository.create({ ride_id, user_id, subscription_date });
  }
}
