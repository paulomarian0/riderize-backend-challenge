import express from 'express';
import { appRoutes } from './routes';

const app = express();
app.use(appRoutes);

app.use(express.json());

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => console.log('Server is running on port', PORT));
