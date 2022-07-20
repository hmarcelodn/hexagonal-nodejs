import { AppDataSource } from '../../../../../data-source';
import { TrainPort } from '../../../application/port/out';
import { TrainEntity } from './entities';
import { TrainMapper } from './mappers';
import { Train } from '../../../domain';

export class TrainPersistanceAdapter implements TrainPort {
    constructor(
        private readonly trainRepository = AppDataSource.getRepository(TrainEntity),
        private readonly trainMapper: TrainMapper,
    ) {}

    getTrains = async (): Promise<any[]> => {
        const trains = await this.trainRepository.find();
        return trains.map(t => this.trainMapper.toDomain(t));
    }

    createTrain = async (trainModel: Train): Promise<any> => {
        const train = this.trainMapper.toEntity(trainModel);
        return this.trainMapper.toDomain(await this.trainRepository.save(train));
    }
}
