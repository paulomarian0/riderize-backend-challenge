// src/middlewares/AuthMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import { AuthUseCase } from '../../../use-cases/auth/AuthUseCase';

class AuthMiddleware {
  private authUseCase: AuthUseCase;

  constructor(authUseCase: AuthUseCase) {
    this.authUseCase = authUseCase;
  }

  public authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'Unauthorized: Missing token' });
    }

    try {
      const isValidToken = await this.authUseCase.validateToken(token);

      if (!isValidToken) {
        return res.status(401).json({ error: 'Unauthorized: Invalid token' });
      }

      next();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
}

export default AuthMiddleware;
