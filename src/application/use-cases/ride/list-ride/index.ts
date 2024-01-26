import { RideRepositoryImplementation } from '../../../repositories/ride/implementation/RideRepositoryImplementation';
import { ListRideController } from './ListRideController';
import { ListRideUseCase } from './ListRideUseCase';

const rideRepository = new RideRepositoryImplementation();

const useCase = new ListRideUseCase(rideRepository);

const controller = new ListRideController(useCase);

export { controller as listRideController };
