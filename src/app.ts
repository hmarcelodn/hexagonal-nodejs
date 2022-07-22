import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { BaseRoute } from './modules/shared/routes';
import { errorHandler } from './modules/shared/middleware/error-handler.middleware';

export class App {
    constructor(app: express.Application, routes: BaseRoute[]) {
        this.initializeMiddlewares(app);
        this.initializeRoutes(app, routes);
        this.initializeApi(app);
        this.initializeGlobalErrorMiddleware(app);
    }

    private initializeApi = (app: express.Application) => {
        const normalizedPort = Number(process.env.PORT) || 4000;

        app.listen(normalizedPort, () => {
            console.log(`🚀 Api Running on port ${normalizedPort}`);
        });
    }

    private initializeRoutes = (app: express.Application, routes: BaseRoute[]) => {
        routes.forEach((route: BaseRoute) => {
            app.use(route.router);
        });
    }

    private initializeMiddlewares = (app: express.Application): void => {
        app.use(express.json());
        app.use(cookieParser());
        app.use(bodyParser());
    }

    private initializeGlobalErrorMiddleware = (app: express.Application): void => {
        app.use(errorHandler);
    }
}
