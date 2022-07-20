import { BaseRoute } from './base.route';
import { CreateTrainController, GetTrainController } from '../modules/train/adapters/in/web';

export class TrainRoute extends BaseRoute {
    public readonly path: string = '/flight';

    constructor(
        protected readonly createFlightController = new CreateTrainController(),
        protected readonly getFlightController = new GetTrainController(),
    ) {
        super();
        this.initializeRoutes();
    }

    protected initializeRoutes(): void {
        this.router.get(this.path, this.getFlightController.get);
        this.router.post(this.path, this.createFlightController.create);
    }
}
