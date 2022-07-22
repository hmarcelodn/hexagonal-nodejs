import { AppDataSource } from '../../../../shared/data/config/data-source';
import { CreateTrainPort, LoadStationPort, LoadTrainsPort } from '../../../application/port/out';
import { StationEntity, TrainEntity } from './entities';
import { StationMapper, TrainMapper } from './mappers';
import { Station, Train } from '../../../domain';
import { Service } from 'typedi';

@Service()
export class TrainPersistanceAdapter implements CreateTrainPort, LoadTrainsPort, LoadStationPort {
    constructor(
        private readonly trainRepository = AppDataSource.getRepository(TrainEntity),
        private readonly stationRepository = AppDataSource.getRepository(StationEntity),
        private readonly trainMapper: TrainMapper,
        private readonly stationMapper: StationMapper,
    ) {}

    getStation = async (stationId: number): Promise<Station | null> => {
        const station = await this.stationRepository.findOne({ where: { id: stationId } });
        return station ? this.stationMapper.toDomain(station): station;
    }

    getTrains = async (): Promise<Train[]> => {
        const trains = await this.trainRepository.find({
            relations: ['sourceStation', 'destinationStation'],
        });
        return trains.map(t => this.trainMapper.toDomain(t));
    }

    createTrain = async (trainModel: Train): Promise<Train> => {
        const train = this.trainMapper.toEntity(trainModel);
        return this.trainMapper.toDomain(await this.trainRepository.save(train));
    }

    getTrain = async (trainId: number): Promise<Train> => {
        const train = await this.trainRepository.findOne({ 
            where: { id: trainId }, 
            relations: ['sourceStation', 'destinationStation'],
        });

        return this.trainMapper.toDomain(train!);
    }

}
