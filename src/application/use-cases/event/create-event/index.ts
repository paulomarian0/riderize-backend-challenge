import { EventRepositoryImplementation } from '../../../repositories/event/implementation/EventRepositoryImplementation';
import { RideRepositoryImplementation } from '../../../repositories/ride/implementation/RideRepositoryImplementation';
import { UserRepositoryImplementation } from '../../../repositories/user/implementation/UserRepositoryImplementation';
import { CreateEventUseCase } from './CrateEventUseCase';
import { CreateEventController } from './CreateEventController';

const eventRepository = new EventRepositoryImplementation();
const rideRepository = new RideRepositoryImplementation();
const userRepository = new UserRepositoryImplementation();

export const createEventUseCase = new CreateEventUseCase(eventRepository, rideRepository, userRepository);

export const controller = new CreateEventController(createEventUseCase);

export { controller as createEventController };
