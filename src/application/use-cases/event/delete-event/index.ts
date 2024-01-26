import { EventRepositoryImplementation } from '../../../repositories/event/implementation/EventRepositoryImplementation';
import { DeleteEventController } from './DeleteEventController';
import { DeleteEventUseCase } from './DeleteEventUseCase';

const eventRepository = new EventRepositoryImplementation();

const deleteEventUseCase = new DeleteEventUseCase(eventRepository);

const controller = new DeleteEventController(deleteEventUseCase);

export { controller as deleteEventController };
