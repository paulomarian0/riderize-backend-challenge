import { databaseAdapter } from '../../../adapter/database';
import { ICreateEventDTO } from '../../../dtos/event/ICreateEvent';
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

  async delete(id: string) {
    await this.repository.event.delete({
      where: { id },
    });
  }
}
