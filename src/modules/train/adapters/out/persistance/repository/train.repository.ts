import { Service } from 'typedi';
import { EntityRepository, Repository } from 'typeorm';
import { TrainPort } from '../../../../application/port/out';
import { TrainTypeOrmEntity } from '../entities/train.entity';

@Service('train.repository')
@EntityRepository(TrainTypeOrmEntity)
export class TrainRepository extends Repository<TrainTypeOrmEntity> implements TrainPort {
    createTrain = async (): Promise<void> => {
        const newTrain = new TrainTypeOrmEntity();
        await this.save(newTrain);
        return Promise.resolve();
    }
}
