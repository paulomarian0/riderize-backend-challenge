import { RideRepositoryImplementation } from '../../../repositories/ride/implementation/RideRepositoryImplementation';
import { DeleteRideController } from './DeleteRideController';
import { DeleteRideUseCase } from './DeleteRideUseCase';

const rideRepository = new RideRepositoryImplementation();

const useCase = new DeleteRideUseCase(rideRepository);

const controller = new DeleteRideController(useCase);

export { controller as deleteRideController };
