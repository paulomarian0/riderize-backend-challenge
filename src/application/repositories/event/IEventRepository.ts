import { ICreateEventDTO } from '../../dtos/event/ICreateEvent';
import { IListEventDTO } from '../../dtos/event/IListEvent';
import { Event } from '../../entities/Event';
export interface IEventRepository {
  create(data: ICreateEventDTO): Promise<void>;
  list(data: IListEventDTO): Promise<Event[]>;
  delete(id: string): Promise<void>;
}
