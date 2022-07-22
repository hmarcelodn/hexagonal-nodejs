import { Service } from 'typedi';
import { body } from 'express-validator';
import { CreateTimeTableController } from '../../timetable/adapters/in';
import { BaseRoute } from '../routes';
import { validateRequest } from '../middleware';

@Service()
export class TimeTableRoute extends BaseRoute {
    public path: string = '/timetable';

    constructor (
        private readonly createTimeTableController: CreateTimeTableController,
    ) {
        super();
        this.initializeRoutes();
    }

    protected initializeRoutes(): void {
        this.router.post(
            this.path,
            body('trainId').isNumeric().notEmpty(),
            body('sourceStationId').isNumeric().notEmpty(),
            body('destinationStationId').isNumeric().notEmpty(),
            body('departureDate').isDate().notEmpty(),
            body('arrivalDate').isDate().notEmpty(),
            validateRequest,
            this.createTimeTableController.create,
        );
    }
}
