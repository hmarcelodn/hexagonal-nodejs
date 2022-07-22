import { Train } from '../../../domain';

export interface LoadTrainsPort {
    getTrains(): Promise<Train[]>;
}
