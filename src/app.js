import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import routes from './interfaces/http/api.js';
import { errorHandler } from './core/middlewares/errorHandler.js';

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(rateLimit({ windowMs: 60 * 1000, max: 60 }));

app.use('/api', routes);
app.use(errorHandler);

export default app;
