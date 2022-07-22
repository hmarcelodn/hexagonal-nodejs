import { Service } from 'typedi';
import { body } from 'express-validator';
import { BaseRoute } from './base.route';
import { CreateTrainController, GetTrainController } from '../../train/adapters/in/web';

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
        this.router.get(
            this.path, 
            this.getFlightController.getAll,
        );

        this.router.post(
            this.path, 
            body('name').isString().notEmpty(),
            body('number').isString().notEmpty(),
            body('sourceStationId').isNumeric().notEmpty(),
            body('destinationStationId').isNumeric().notEmpty(),
            this.createFlightController.create,
        );
    }
}
