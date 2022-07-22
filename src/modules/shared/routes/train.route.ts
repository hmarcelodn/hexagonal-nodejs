import { Service } from 'typedi';
import { body } from 'express-validator';
import { BaseRoute } from './base.route';
import { CreateTrainController, GetTrainController } from '../../train/adapters/in/web';
import { validateRequest } from '../middleware';

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
            body('name').notEmpty().isString(),
            body('number').notEmpty().isString(),
            body('sourceStationId').notEmpty().isNumeric(),
            body('destinationStationId').notEmpty().isNumeric(),
            validateRequest,
            this.createFlightController.create,
        );
    }
}
