import { RideRepositoryImplementation } from '../../../repositories/ride/implementation/RideRepositoryImplementation';
import { CreateRideController } from './CreateRideController';
import { CreateRideUseCase } from './CreateRideUseCase';

const rideRepository = new RideRepositoryImplementation();

const useCase = new CreateRideUseCase(rideRepository);

const controller = new CreateRideController(useCase);

export { controller as createRideController };
