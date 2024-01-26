import { IRideRepository } from '../../../repositories/ride/IRideRepository';

export class DeleteRideUseCase {
  constructor(private rideRepository: IRideRepository) {}

  async execute(id: string): Promise<void> {
    await this.rideRepository.delete(id);
  }
}
