import { BaseRoute } from './base.route';
import { CreateFlightController, GetFlightController } from '../modules/flights/adapters/in/web';

export class FlightRoute extends BaseRoute {
    public readonly path: string = '/flight';

    constructor(
        protected readonly createFlightController = new CreateFlightController(),
        protected readonly getFlightController = new GetFlightController()
    ) {
        super();
        this.initializeRoutes();
    }

    protected initializeRoutes(): void {
        this.router.get(this.path, this.getFlightController.get);
        this.router.post(this.path, this.createFlightController.create);
    }
}
