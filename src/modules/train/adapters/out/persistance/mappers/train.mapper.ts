import { Service } from 'typedi';
import { Train } from '../../../../domain/train.entity';
import { TrainEntity, StationEntity } from '../entities';

@Service()
export class TrainMapper {
    toEntity(train: Train): TrainEntity {
        const trainEntity = new TrainEntity();
        trainEntity.name = train.name;
        trainEntity.number = train.number;
        trainEntity.sourceStation = { id: train.sourceStationId.id } as StationEntity;
        trainEntity.destinationStation = { id: train.destinationStationId.id } as StationEntity;
        trainEntity.id = train.id;

        return trainEntity;
    }

    toDomain(trainEntity: TrainEntity): Train {
        const {
            id,
            name,
            number,
            sourceStation,
            destinationStation,
        } = trainEntity;
        
        if (id) { 
            return Train.withtId(
                id,
                name,
                number,
                sourceStation.id,
                destinationStation.id,
            );
        }

        return Train.withoutId(
            name,
            number,
            sourceStation.id,
            destinationStation.id,
        );
    }
}
