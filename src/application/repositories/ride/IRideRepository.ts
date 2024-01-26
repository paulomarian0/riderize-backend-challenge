import { ICreateRideDTO } from '../../dtos/ride/ICreateRideDTO';
import { IListRideDTO } from '../../dtos/ride/IListRideDTO';
import { Ride } from '../../entities/Ride';

export interface IRideRepository {
  create(data: ICreateRideDTO): Promise<void>;
  count(data: IListRideDTO): Promise<number>;
  find(data: IListRideDTO): Promise<Ride | undefined>;
  list(data: IListRideDTO): Promise<Ride[]>;
  delete(id: string): Promise<void>;
}
