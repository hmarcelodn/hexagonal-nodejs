import { Train } from '../../../domain';

export interface GetTrainUseCase {
    get(trainId: number): Promise<Train>;
}
