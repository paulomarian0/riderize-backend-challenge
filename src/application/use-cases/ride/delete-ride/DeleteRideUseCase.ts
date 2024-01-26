import AppError from '../../../adapter/error';
import { IRideRepository } from '../../../repositories/ride/IRideRepository';

export class DeleteRideUseCase {
  constructor(private rideRepository: IRideRepository) {}

  async execute(id: string): Promise<void> {
    await this.validate(id);

    await this.rideRepository.delete(id);
  }

  async validate(id: string) {
    const findById = await this.rideRepository.find({ id });

    if (!findById) {
      throw new AppError({
        title: 'Ride not found',
        message: 'Ride was not found, please check your data',
        statusCode: 409,
      });
    }
  }
}
