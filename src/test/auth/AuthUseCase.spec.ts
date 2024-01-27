import { expect, test, describe } from 'vitest';
import { AuthUseCase } from '../../application/use-cases/auth/AuthUseCase';

describe('auth use case tests', () => {
  const useCase = new AuthUseCase();

  test('should return a token when valid credentials are provided', async () => {
    const token = await useCase.authenticate({ email: 'teste' });
    expect(token).toBeDefined();
  });

  test('should return undefined when invalid credentials are provided', async () => {
    const token = await useCase.authenticate({ email: '' });
    expect(token).toBeUndefined();
  });
});
