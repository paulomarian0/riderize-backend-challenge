// src/useCases/AuthService.ts
import jwt from 'jsonwebtoken';
import { env } from '../../../helpers/env';

export class AuthUseCase {
  async authenticate({ email }: { email: string }) {
    if (email === 'teste') {
      const token = jwt.sign({}, env.SECRET, { expiresIn: '1h' });
      return token;
    }
  }

  async validateToken(token: string): Promise<boolean> {
    try {
      jwt.verify(token, env.SECRET);
      return true;
    } catch (error) {
      return false;
    }
  }
}
