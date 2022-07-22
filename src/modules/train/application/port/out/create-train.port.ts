import { Train } from '../../../domain';

export interface CreateTrainPort {
    createTrain(train: any): Promise<Train>;
}

