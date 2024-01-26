import { databaseAdapter } from '../../../adapter/database';
import { ICreateEventDTO } from '../../../dtos/event/ICreateEvent';
import { IListEventDTO } from '../../../dtos/event/IListEvent';
import { IEventRepository } from '../IEventRepository';

export class EventRepositoryImplementation implements IEventRepository {
  private repository: typeof databaseAdapter;

  constructor() {
    this.repository = databaseAdapter;
  }

  async create({ ride_id, user_id, subscription_date }: ICreateEventDTO) {
    await this.repository.event.create({
      data: { ride_id, user_id, subscription_date },
    });
  }

  async list({ id, ride_id, subscription_date, user_id }: IListEventDTO) {
    return await this.repository.event.findMany({
      where: {
        id,
        ride_id,
        subscription_date,
        user_id,
      },
    });
  }

  async delete(id: string) {
    await this.repository.event.delete({
      where: { id },
    });
  }
}
