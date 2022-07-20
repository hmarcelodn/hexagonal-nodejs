import { CreateFlightController } from '../modules/flights/adapters/in/web';
import { BaseRoute } from './base.route';

export class FlightRoute extends BaseRoute {
    public readonly path: string = '/flight';

    constructor(
        protected readonly createFlightController = new CreateFlightController()
    ) {
        super();
        this.initializeRoutes();
    }

    protected initializeRoutes(): void {
        this.router.get(this.path, this.createFlightController.create);
    }
}
