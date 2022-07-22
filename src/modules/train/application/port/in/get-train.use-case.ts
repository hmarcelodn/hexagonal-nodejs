import { Train } from '../../../domain';

export interface GetTrainUseCase {
    getAll(): Promise<Train[]>;
}
