import { Train } from '../../../domain';

export interface GetTrainsUseCase {
    getAll(): Promise<Train[]>;
}
