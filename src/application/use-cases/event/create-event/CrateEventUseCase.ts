import AppError from '../../../adapter/error';
import { ICreateEventDTO, createEventSchemaZodValidator } from '../../../dtos/event/ICreateEvent';
import { IRideRepository } from '../../../repositories/ride/IRideRepository';
import { IUserRepository } from '../../../repositories/user/IUserRepository';
import { IEventRepository } from '../../../repositories/event/IEventRepository';

interface IExecute extends ICreateEventDTO {
  ride_participant?: {
    id: string;
    subscription_date: Date;
  }[];
}

export class CreateEventUseCase {
  constructor(
    private eventRepository: IEventRepository,
    private rideRepository: IRideRepository,
    private userRepository: IUserRepository,
  ) {}

  async execute({ ride_id, user_id, subscription_date }: IExecute) {
    createEventSchemaZodValidator.parse({ ride_id, user_id, subscription_date });

    await this.validate({ ride_id, user_id, subscription_date });
    await this.eventRepository.create({ ride_id, user_id, subscription_date });
  }

  async validate({ ride_id, user_id, subscription_date }: IExecute) {
    const findRide = (await this.rideRepository.find({ id: ride_id })) as any;
    const findUser = await this.userRepository.find({ id: user_id });

    if (findRide?.participants_limit ?? 0 >= (findRide?.ride_participant as any).length) {
      throw new AppError({
        title: 'Limit reached',
        message: 'The limit of participants has already been reached',
        statusCode: 400,
      });
    }

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
