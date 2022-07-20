import express from 'express';
import { BaseRoute } from './routes';

export class App {
    constructor(app: express.Application, routes: BaseRoute[]) {
        this.initializeRoutes(app, routes);
        this.initializeApi(app);
    }

    private initializeApi = (app: express.Application) => {
        const normalizedPort = 4000 || Number(process.env.PORT);

        app.listen(normalizedPort, () => {
            console.log(`🚀 Api Running on port ${normalizedPort}`);
        });
    }

    private initializeRoutes = (app: express.Application, routes: BaseRoute[]) => {
        routes.forEach((route: BaseRoute) => {
            app.use(route.router);
        });
    }
}
