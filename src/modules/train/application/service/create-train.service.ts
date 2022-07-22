import { Inject } from 'typedi';
import { InvalidRouteError, StationNotFoundError } from '../../../shared/error';
import { Train } from '../../domain';
import { TrainMapper } from '../mapper';
import { CreateTrainInputModel, CreateTrainUseCase } from '../port/in';
import { CreateTrainPort, LoadStationPort } from '../port/out';

export class CreateTrainService implements CreateTrainUseCase {
    constructor(
        @Inject('create-train.port')
        private readonly createTrainPort: CreateTrainPort,
        @Inject('load-station.port')
        private readonly loadStationPort: LoadStationPort,
        private readonly trainMapper: TrainMapper,
    ) {}

    create = async (trainInputModel: CreateTrainInputModel): Promise<Train> => {
        const train = this.trainMapper.toDomain(trainInputModel);

        const sourceStation = await this.loadStationPort.getStation(train.getSourceStationId.id);
        if (!sourceStation) {
            throw new StationNotFoundError(train.getSourceStationId.id);
        }

        const destinationStation = await this.loadStationPort.getStation(train.getDestinationStationId.id);
        if (!destinationStation) {
            throw new StationNotFoundError(train.getDestinationStationId.id);
        }

        if (!train.isValidRoute()) {
            throw new InvalidRouteError();
        }

        return await this.createTrainPort.createTrain(train);
    }
}
