import dotenv from 'dotenv';
import logger from '@/utils/logger';
import apiRoutes from '@/routes/api';
import { createApp } from '@/app';

dotenv.config();

const port = Number(process.env.PORT || 3000);
export const app = createApp(apiRoutes);

export const startServer = () => {
    return app.listen(port, () => {
        logger.info(`Server running on port ${port}`);
    });
};

export const syncDatabase = async () => {
    let retries = 30;
    while (retries > 0) {
        try {
            const sequelize = (await import('@/config/database')).default;
            await sequelize.sync();
            logger.info('Database synced');
            return;
        } catch (error) {
            logger.error('Error syncing database:', error);
            retries -= 1;
            logger.info(`Retries left: ${retries}`);
            if (retries > 0) {
                await new Promise(res => setTimeout(res, 5000));
            }
        }
    }

    throw new Error('Database unavailable after 30 connection attempts');
};

export const main = async () => {
    await syncDatabase();
    startServer();
};

if (require.main === module) {
    main().catch((error) => {
        logger.error('Failed to start server:', error);
        process.exitCode = 1;
    });
}
