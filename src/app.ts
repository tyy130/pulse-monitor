import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import hpp from 'hpp';
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';

import swaggerSpecs from '@/config/swagger';
import logger from '@/utils/logger';

export const createApp = (apiRouter: express.Router) => {
    const app = express();

    app.use(helmet());
    app.use(hpp());
    app.use(cors({ origin: '*', methods: ['GET', 'POST', 'PUT', 'DELETE'] }));
    app.use(rateLimit({ windowMs: 10 * 60 * 1000, max: 100 }));
    app.use(express.json());
    app.use(morgan('combined', { stream: { write: (message) => logger.info(message.trim()) } }));

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
    app.use('/api', apiRouter);

    app.get('/health', (_req: Request, res: Response) => {
        res.json({ status: 'UP' });
    });

    return app;
};
