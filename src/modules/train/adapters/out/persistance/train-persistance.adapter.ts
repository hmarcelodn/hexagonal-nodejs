import { TrainPort } from '../../../application/port/out';
import { AppDataSource } from '../../../../../data-source';
import { TrainTypeOrmEntity } from './entities';

export class TrainPersistanceAdapter implements TrainPort {
    constructor(
        private readonly trainRepository = AppDataSource.getRepository(TrainTypeOrmEntity)
    ) {}

    getTrains = async (): Promise<any[]> => {
        const trains = await this.trainRepository.find();
        return trains;
    }

    createTrain = async (trainInputModel: any): Promise<any> => {
        const train = new TrainTypeOrmEntity();
        return await this.trainRepository.save(train);
    }
}
