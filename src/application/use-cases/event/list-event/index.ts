import { EventRepositoryImplementation } from '../../../repositories/event/implementation/EventRepositoryImplementation';
import { ListEventController } from './ListEventController';
import { ListEventUseCase } from './ListEventUseCase';

const eventRepository = new EventRepositoryImplementation();

const listEventUseCase = new ListEventUseCase(eventRepository);

const controller = new ListEventController(listEventUseCase);

export { controller as listEventController };
