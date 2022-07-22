import { Train } from '../../domain';
import { CreateTrainInputModel, CreateTrainUseCase } from '../port/in';
import { CreateTrainPort, LoadStationPort } from '../port/out';

export class CreateTrainService implements CreateTrainUseCase {
    constructor(
        private readonly createTrainPort: CreateTrainPort,
        private readonly loadStationPort: LoadStationPort,
    ) {}

    create = async (trainInputModel: CreateTrainInputModel): Promise<Train> => {
        const sourceStation = await this.loadStationPort.getStation(trainInputModel.sourceStationId);
        if (!sourceStation) {
            throw new Error('Source Station was not found');
        }

        const destinationStation = await this.loadStationPort.getStation(trainInputModel.destinationStationId);
        if (!destinationStation) {
            throw new Error('Destination Station was not found');
        }

        return await this.createTrainPort.createTrain(trainInputModel);
    }
}
