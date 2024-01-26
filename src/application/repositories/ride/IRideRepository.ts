import { ICreateRideDTO } from '../../dtos/ride/ICreateRideDTO';
import { IListRideDTO } from '../../dtos/ride/IListRideDTO';
import { IUpdateRideDTO } from '../../dtos/ride/IUpdateRideDTO';
import { Ride } from '../../entities/Ride';

export interface IRideRepository {
  create(data: ICreateRideDTO): Promise<void>;
  count(data: IListRideDTO): Promise<number>;
  find(data: IListRideDTO): Promise<Ride | null>;
  list(data: IListRideDTO): Promise<Ride[]>;
  update(data: IUpdateRideDTO): Promise<void>;
  delete(id: string): Promise<void>;
}
