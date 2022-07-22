import { Train } from '../../../domain';

export interface CreateTrainInputModel {
    name: string;
    number: string;
    sourceStationId: number;
    destinationStationId: number;
}

export interface CreateTrainUseCase {
    create(trainInputModel: CreateTrainInputModel): Promise<Train>;
}
