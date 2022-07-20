import { Service } from 'typedi';
import { Train } from '../../../../domain/train.entity';
import { TrainEntity } from '../entities';

@Service()
export class TrainMapper {
    toEntity(train: Train): TrainEntity {
        const trainTypeOrmEntity = new TrainEntity();
        return trainTypeOrmEntity;
    }

    toDomain(trainEntity: TrainEntity): Train {
        return new Train();
    }
}
