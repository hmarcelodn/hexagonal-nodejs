import { Service } from 'typedi';
import { Train } from '../../domain';
import { CreateTrainInputModel } from '../port/in';

@Service()
export class TrainMapper {
    toDomain(inputModel: CreateTrainInputModel): Train {
        return Train.withoutId(
            inputModel.name,
            inputModel.number,
            inputModel.sourceStationId,
            inputModel.destinationStationId,
        );
    }
}
