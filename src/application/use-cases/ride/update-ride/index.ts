import { RideRepositoryImplementation } from '../../../repositories/ride/implementation/RideRepositoryImplementation';
import { UpdateRideController } from './UpdateRideController';
import { UpdateRideUseCase } from './UpdateRideUseCase';

const rideRepository = new RideRepositoryImplementation();

const useCase = new UpdateRideUseCase(rideRepository);

const controller = new UpdateRideController(useCase);

export { controller as updateRideController };
