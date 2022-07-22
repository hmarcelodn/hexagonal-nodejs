import { StationNotFoundError, TrainNotFound } from '../../../shared/error';
import { TimeTable } from '../../domain';
import { CreateTimeTableInputModel, CreateTimeTableUseCase } from '../port/in';
import { StationPort, TimeTablePort, TrainPort } from '../port/out';

export class CreateTimeTableService implements CreateTimeTableUseCase {
    constructor(
        private readonly timeTablePort: TimeTablePort,
        private readonly stationPort: StationPort,
        private readonly trainPort: TrainPort,
    ) {}

    create = async (inputModel: CreateTimeTableInputModel): Promise<TimeTable> => {
        const train = await this.trainPort.getTrain(inputModel.trainId);

        if (!train) {
            throw new TrainNotFound();
        }

        const sourceStation = await this.stationPort.getStation(inputModel.sourceStationId);
        if (!sourceStation) {
            throw new StationNotFoundError(inputModel.sourceStationId);
        }

        const destStation = await this.stationPort.getStation(inputModel.destinationStationId);
        if (!destStation) {
            throw new StationNotFoundError(inputModel.destinationStationId);
        }

        const timeTable = TimeTable.withoutId(inputModel.trainId);
        timeTable.schedule(inputModel.departureDate, inputModel.arrivalDate);
        timeTable.setRoutes(inputModel.sourceStationId, inputModel.destinationStationId);

        return await this.timeTablePort.createTimeTable(timeTable);
    }
}
