import { Service } from 'typedi';
import { Train } from '../../../../domain/train.entity';
import { TrainEntity, StationEntity } from '../entities';

@Service()
export class TrainMapper {
    toEntity(train: Train): TrainEntity {
        const trainEntity = new TrainEntity();
        trainEntity.name = train.getName;
        trainEntity.number = train.getNumber;
        trainEntity.sourceStation = { id: train.getSourceStationId.id } as StationEntity;
        trainEntity.destinationStation = { id: train.getDestinationStationId.id } as StationEntity;
        trainEntity.id = train.getId;

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
