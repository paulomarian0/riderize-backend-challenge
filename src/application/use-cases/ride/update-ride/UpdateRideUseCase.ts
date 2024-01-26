import AppError from '../../../adapter/error';
import { IUpdateRideDTO, updateSchemaZodValidator } from '../../../dtos/ride/IUpdateRideDTO';
import { IRideRepository } from '../../../repositories/ride/IRideRepository';

interface IExecute extends IUpdateRideDTO {}
export class UpdateRideUseCase {
  constructor(private rideRepository: IRideRepository) {}

  async execute({ id, name, start_place, additional_information, participants_limit }: IExecute): Promise<void> {
    updateSchemaZodValidator.parse({
      id,
      name,
      start_place,
      additional_information,
      participants_limit,
    });

    await this.validate({ id, name });
    await this.rideRepository.update({
      id,
      name,
      start_place,
      additional_information,
      participants_limit,
    });
  }

  async validate({ id, name }: { id: string; name: string }) {
    const findByName = await this.rideRepository.find({ name });
    const findById = await this.rideRepository.find({ id });

    if (findByName) {
      throw new AppError({
        title: 'Ride already exists',
        message: 'Already have a ride with this name',
        statusCode: 409,
      });
    }

    if (!findById) {
      throw new AppError({
        title: 'Ride not found',
        message: 'Ride was not found, please check your data',
        statusCode: 409,
      });
    }
  }
}
