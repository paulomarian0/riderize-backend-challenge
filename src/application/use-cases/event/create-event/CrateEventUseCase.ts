import AppError from '../../../adapter/error';
import { ICreateEventDTO } from '../../../dtos/event/ICreateEvent';
import { IEventRepository } from '../../../repositories/event/IEventRepository';
import { IRideRepository } from '../../../repositories/ride/IRideRepository';
import { IUserRepository } from '../../../repositories/user/IUserRepository';

interface IExecute extends ICreateEventDTO {}

export class CreateEventUseCase {
  constructor(
    private eventRepository: IEventRepository,
    private rideRepository: IRideRepository,
    private userRepository: IUserRepository,
  ) {}

  async execute({ ride_id, user_id, subscription_date }: IExecute) {
    await this.validate({ ride_id, user_id, subscription_date });

    await this.eventRepository.create({ ride_id, user_id, subscription_date });
  }

  async validate({ ride_id, user_id, subscription_date }: IExecute) {
    const findRide = await this.rideRepository.find({ id: ride_id });
    const findUser = await this.userRepository.find({ id: user_id });

    if (!ride_id || !user_id || !subscription_date) {
      throw new AppError({
        title: 'Missing data',
        message: 'Missing data to create a new event',
        statusCode: 400,
      });
    }

    if (!findRide) {
      throw new AppError({
        title: 'Ride not found',
        message: 'This ride does not exist',
        statusCode: 400,
      });
    }

    if (!findUser) {
      throw new AppError({
        title: 'User not found',
        message: 'This user does not exist',
        statusCode: 400,
      });
    }

    if (
      new Date(subscription_date) > new Date(findRide.end_date_registration) ||
      new Date(subscription_date) < new Date(findRide.start_date_registration)
    ) {
      throw new AppError({
        title: 'Registration expired',
        message: 'You cannot subscribe to this event because the registration period has already expired',
        statusCode: 400,
      });
    }
  }
}
