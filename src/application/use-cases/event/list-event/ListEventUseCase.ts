import { IListEventDTO } from '../../../dtos/event/IListEvent';
import { IEventRepository } from '../../../repositories/event/IEventRepository';

interface IExecute extends IListEventDTO {}

export class ListEventUseCase {
  constructor(private eventRepository: IEventRepository) {}

  async execute({ id, ride_id, subscription_date, user_id }: IExecute) {
    const events = await this.eventRepository.list({ id, ride_id, subscription_date, user_id });

    return events;
  }
}
