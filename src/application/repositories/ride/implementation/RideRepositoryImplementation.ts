import { databaseAdapter } from '../../../adapter/database';
import { ICreateRideDTO } from '../../../dtos/ride/ICreateRideDTO';
import { IListRideDTO } from '../../../dtos/ride/IListRideDTO';
import { IUpdateRideDTO } from '../../../dtos/ride/IUpdateRideDTO';
import { IRideRepository } from '../IRideRepository';

export class RideRepositoryImplementation implements IRideRepository {
  private repository: typeof databaseAdapter;

  constructor() {
    this.repository = databaseAdapter;
  }

  async create({
    name,
    start_date,
    start_place,
    start_date_registration,
    end_date_registration,
    participants_limit,
    additional_information,
  }: ICreateRideDTO) {
    return await this.repository.ride.create({
      data: {
        name,
        start_date,
        start_place,
        start_date_registration,
        end_date_registration,
        participants_limit,
        additional_information,
      },
    });
  }

  async count({ id, name, start_date }: IListRideDTO) {
    return await this.repository.ride.count({
      where: {
        id: id ? { equals: id } : undefined,
        name: name ? { equals: name } : undefined,
        start_date: start_date ? { equals: start_date } : undefined,
      },
    });
  }

  async find({ id, name, start_date }: IListRideDTO) {
    return await this.repository.ride.findFirst({
      where: {
        id: id ? { equals: id } : undefined,
        name: name ? { equals: name } : undefined,
        start_date: start_date ? { equals: start_date } : undefined,
      },
    });
  }

  async list({ id, name, start_date }: IListRideDTO) {
    return await this.repository.ride.findMany({
      where: {
        id: id ? { equals: id } : undefined,
        name: name ? { equals: name } : undefined,
        start_date: start_date ? { equals: start_date } : undefined,
      },
      include: {
        ride_participant: {
          select: {
            id: true,
            subscription_date: true,
            ride: {
              select: {
                id: true,
                name: true,
              },
            },
            user: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });
  }

  async update({ id, name, start_place, participants_limit, additional_information }: IUpdateRideDTO) {
    return await this.repository.ride.update({
      where: {
        id,
      },
      data: {
        name,
        start_place,
        participants_limit,
        additional_information,
      },
    });
  }

  async delete(id: string) {
    return await this.repository.ride.delete({
      where: {
        id,
      },
    });
  }
}
