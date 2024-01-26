import { EventRepositoryImplementation } from '../../../repositories/event/implementation/EventRepositoryImplementation';
import { CreateEventUseCase } from './CrateEventUseCase';
import { CreateEventController } from './CreateEventController';

const eventRepository = new EventRepositoryImplementation();

export const createEventUseCase = new CreateEventUseCase(eventRepository);

export const controller = new CreateEventController(createEventUseCase);

export { controller as createEventController };
