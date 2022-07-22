import { Train } from '../../../domain';

export interface LoadTrainsPort {
    getTrains(): Promise<Train[]>;
    getTrain(trainId: number): Promise<Train>;
}
