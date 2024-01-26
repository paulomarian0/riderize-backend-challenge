import { ICreateEventDTO } from '../../dtos/event/ICreateEvent';

export interface IEventRepository {
  create(data: ICreateEventDTO): Promise<void>;
  delete(id: string): Promise<void>;
}
