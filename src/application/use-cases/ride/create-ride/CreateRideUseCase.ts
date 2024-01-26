import { ICreateRideDTO } from '../../../dtos/ride/ICreateRideDTO';
import { IRideRepository } from '../../../repositories/ride/IRideRepository';

interface IExecute extends ICreateRideDTO {}

export class CreateRideUseCase {
  constructor(private rideRepository: IRideRepository) {}

  async execute({
    name,
    start_date,
    start_place,
    start_date_registration,
    end_date_registration,
    participants_limit,
    additional_information,
  }: IExecute): Promise<void> {
    await this.rideRepository.create({
      name,
      start_date,
      start_place,
      start_date_registration,
      end_date_registration,
      participants_limit,
      additional_information,
    });
  }
}
