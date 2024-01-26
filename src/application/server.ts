import express from 'express';
import { appRoutes } from './routes';
import cors from 'cors';

const PORT = process.env.PORT ?? 3000;

const app = express();

app.use(cors());

app.use(express.json());

app.use(appRoutes);

app.listen(PORT, () => console.log('Server is running on port', PORT));
