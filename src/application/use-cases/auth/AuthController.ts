// src/controllers/UserController.ts
import { Request, Response } from 'express';
import { AuthUseCase } from './AuthUseCase';

export class AuthController {
  constructor(private authUseCase: AuthUseCase) {}

  async handle(req: Request, res: Response): Promise<void> {
    try {
      const { email } = req.body;
      const token = await this.authUseCase.authenticate({ email });
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
