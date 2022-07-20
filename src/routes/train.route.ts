import { Service } from 'typedi';
import { BaseRoute } from './base.route';
import { CreateTrainController, GetTrainController } from '../modules/train/adapters/in/web';

@Service()
export class TrainRoute extends BaseRoute {
    public readonly path: string = '/train';

    constructor(
        private readonly createFlightController: CreateTrainController,
        private readonly getFlightController: GetTrainController,
    ) {
        super();
        this.initializeRoutes();
    }

    protected initializeRoutes(): void {
        this.router.get(this.path, this.getFlightController.get);
        this.router.post(this.path, this.createFlightController.create);
    }
}
