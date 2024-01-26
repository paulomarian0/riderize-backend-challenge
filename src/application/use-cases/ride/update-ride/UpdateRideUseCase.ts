import { IUpdateRideDTO } from '../../../dtos/ride/IUpdateRideDTO';
import { IRideRepository } from '../../../repositories/ride/IRideRepository';

interface IExecute extends IUpdateRideDTO {}
export class UpdateRideUseCase {
  constructor(private rideRepository: IRideRepository) {}

  async execute({
    id,
    name,
    end_date_registration,
    start_date,
    start_date_registration,
    start_place,
    additional_information,
    participants_limit,
  }: IExecute): Promise<void> {
    await this.rideRepository.update({
      id,
      name,
      end_date_registration,
      start_date,
      start_date_registration,
      start_place,
      additional_information,
      participants_limit,
    });
  }
}
