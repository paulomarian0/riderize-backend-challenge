import { ICreateRideDTO } from '../../application/dtos/ride/ICreateRideDTO';
import { IListRideDTO } from '../../application/dtos/ride/IListRideDTO';
import { IUpdateRideDTO } from '../../application/dtos/ride/IUpdateRideDTO';
import { Ride } from '../../application/entities/Ride';
import { IRideRepository } from '../../application/repositories/ride/IRideRepository';
import { randomUUID } from 'crypto';

export class InMemoryRideRepository implements IRideRepository {
  private rides: any[] = [];

  async create(rideData: ICreateRideDTO): Promise<Ride> {
    const ride = {
      id: randomUUID(),
      name: rideData.name,
      start_date: rideData.start_date,
      start_place: rideData.start_place,
      start_date_registration: rideData.start_date_registration,
      end_date_registration: rideData.end_date_registration,
      participants_limit: rideData.participants_limit,
      additional_information: rideData.additional_information || null,
    };

    this.rides.push(ride);

    return ride as Ride;
  }

  async count({ id, name, start_date }: IListRideDTO) {
    return this.rides.filter((ride) => (!id || ride.id === id) && (!name || ride.name === name) && (!start_date || ride.start_date === start_date))
      .length;
  }

  async find({ id, name, start_date }: IListRideDTO) {
    return this.rides.find((ride) => (!id || ride.id === id) && (!name || ride.name === name) && (!start_date || ride.start_date === start_date));
  }

  async list({ id, name, start_date }: IListRideDTO) {
    return this.rides.filter((ride) => (!id || ride.id === id) && (!name || ride.name === name) && (!start_date || ride.start_date === start_date));
  }

  async update({ id, name, start_place, participants_limit, additional_information }: IUpdateRideDTO) {
    const rideIndex = this.rides.findIndex((ride) => ride.id === id);

    this.rides[rideIndex].name = name;
    this.rides[rideIndex].start_place = start_place;
    this.rides[rideIndex].participants_limit = participants_limit;
    this.rides[rideIndex].additional_information = additional_information;

    return this.rides[rideIndex];
  }

  async delete(id: string) {
    const rideIndex = this.rides.findIndex((ride) => ride.id === id);
    this.rides.splice(rideIndex, 1);

    return this.rides[rideIndex];
  }
}
