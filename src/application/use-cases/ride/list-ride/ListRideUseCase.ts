import { IListRideDTO } from '../../../dtos/ride/IListRideDTO';
import { IRideRepository } from '../../../repositories/ride/IRideRepository';

interface IExecute extends IListRideDTO {}

export class ListRideUseCase {
  constructor(private rideRepository: IRideRepository) {}

  async execute({ id, name, start_date }: IExecute) {
    const count = await this.rideRepository.count({
      id,
      name,
      start_date,
    });
    const rides = await this.rideRepository.list({
      id,
      name,
      start_date,
    });

    return { count, data: rides };
  }
}
