import { AppDataSource } from '../../../../shared/data-source';
import { CreateTrainPort, LoadStationPort, LoadTrainsPort } from '../../../application/port/out';
import { StationEntity, TrainEntity } from './entities';
import { StationMapper, TrainMapper } from './mappers';
import { Station, Train } from '../../../domain';

export class TrainPersistanceAdapter implements CreateTrainPort, LoadTrainsPort, LoadStationPort {
    constructor(
        private readonly trainRepository = AppDataSource.getRepository(TrainEntity),
        private readonly stationRepository = AppDataSource.getRepository(StationEntity),
        private readonly trainMapper: TrainMapper,
        private readonly stationMapper: StationMapper,
    ) {}

    getStation = async (stationId: number): Promise<Station> => {
        const station = await this.stationRepository.findOne({ where: { id: stationId } });
        return this.stationMapper.toDomain(station!);
    }

    getTrains = async (): Promise<Train[]> => {
        const trains = await this.trainRepository.find();
        return trains.map(t => this.trainMapper.toDomain(t));
    }

    createTrain = async (trainModel: Train): Promise<Train> => {
        const train = this.trainMapper.toEntity(trainModel);
        return this.trainMapper.toDomain(await this.trainRepository.save(train));
    }
}
