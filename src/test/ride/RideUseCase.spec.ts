import { describe, test, expect } from 'vitest';
import { CreateRideUseCase } from '../../application/use-cases/ride/create-ride/CreateRideUseCase';
import { InMemoryRideRepository } from './ride-memory-repository';
import { ICreateRideDTO } from '../../application/dtos/ride/ICreateRideDTO';
import { ListRideUseCase } from '../../application/use-cases/ride/list-ride/ListRideUseCase';
import { UpdateRideUseCase } from '../../application/use-cases/ride/update-ride/UpdateRideUseCase';

describe('ride use case tests', () => {
  const rideRepository = new InMemoryRideRepository();

  test('should create a new ride', async () => {
    const createRideUseCase = new CreateRideUseCase(rideRepository);

    const rideData: ICreateRideDTO = {
      name: 'Pedal',
      start_date: new Date('2023-01-30T00:00:00.000Z'),
      start_date_registration: new Date('2023-01-20T00:00:00.000Z'),
      end_date_registration: new Date('2023-01-29T00:00:00.000Z'),
      additional_information: 'é um pedal',
      start_place: 'praça de cobilandia',
      participants_limit: 2,
    };
    const result = await createRideUseCase.execute(rideData);

    expect(result.name).toBe(rideData.name);
  });

  test('list rides', async () => {
    const listRideUseCase = new ListRideUseCase(rideRepository);

    const { data, count } = await listRideUseCase.execute({});

    expect(data).toHaveLength(count);
  });

  test('update rides', async () => {
    const updateRideUseCase = new UpdateRideUseCase(rideRepository);

    const rideData: ICreateRideDTO = {
      name: 'Pedal',
      start_date: new Date('2023-01-30T00:00:00.000Z'),
      start_date_registration: new Date('2023-01-20T00:00:00.000Z'),
      end_date_registration: new Date('2023-01-29T00:00:00.000Z'),
      additional_information: 'é um pedal',
      start_place: 'praça de cobilandia',
      participants_limit: 2,
    };

    const ride = await rideRepository.create(rideData);

    const result = await updateRideUseCase.execute({
      id: ride.id,
      name: 'Pedal Edit',
      start_place: 'local editado',
      participants_limit: 2,
      additional_information: 'é uma edição',
    });

    expect(result.name).toBe('Pedal Edit');
  });

  test('delete rides', async () => {
    const rideData: ICreateRideDTO = {
      name: 'Pedal',
      start_date: new Date('2023-01-30T00:00:00.000Z'),
      start_date_registration: new Date('2023-01-20T00:00:00.000Z'),
      end_date_registration: new Date('2023-01-29T00:00:00.000Z'),
      additional_information: 'é um pedal',
      start_place: 'praça de cobilandia',
      participants_limit: 2,
    };

    const ride = await rideRepository.create(rideData);

    await rideRepository.delete(ride.id);

    const result = await rideRepository.find({ id: ride.id });

    expect(result).toBeUndefined();
  });
});
