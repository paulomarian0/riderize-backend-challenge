import express from 'express';
import cors from 'cors';
import { appRoutes } from './infra/routes';
import { env } from '../helpers/env';

const PORT = env.PORT ?? 3000;

const app = express();

app.use(cors());

app.use(express.json());

app.use(appRoutes);

app.listen(PORT, () => console.log('Server is running on port', PORT));
