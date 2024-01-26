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
    await this.repository.ride.create({
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
        id,
        name,
        start_date,
      },
    });
  }

  async find({ id, name, start_date }: IListRideDTO) {
    return await this.repository.ride.findFirst({
      where: {
        id,
        name,
        start_date,
      },
    });
  }

  async list({ id, name, start_date }: IListRideDTO) {
    return await this.repository.ride.findMany({
      where: {
        id,
        name,
        start_date,
      },
    });
  }

  async update({ id, name, start_place, participants_limit, additional_information }: IUpdateRideDTO) {
    await this.repository.ride.update({
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
    await this.repository.ride.delete({
      where: {
        id,
      },
    });
  }
}
