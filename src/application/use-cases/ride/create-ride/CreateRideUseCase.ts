import AppError from '../../../adapter/error';
import { ICreateRideDTO, createRideSchemaZodValidator } from '../../../dtos/ride/ICreateRideDTO';
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
    createRideSchemaZodValidator.parse({
      name,
      start_date,
      start_date_registration,
      end_date_registration,
      additional_information,
      start_place,
      participants_limit,
    });

    await this.validate({ name });
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

  async validate({ name }: { name: string }) {
    const findByName = await this.rideRepository.find({ name });

    if (findByName) {
      throw new AppError({
        title: 'Ride already exists',
        message: 'Already have a ride with this name',
        statusCode: 409,
      });
    }
  }
}
