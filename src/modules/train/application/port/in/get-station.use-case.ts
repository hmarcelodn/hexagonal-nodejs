import { Station } from '../../../domain';

export interface GetStationUseCase {
    getStation(stationId: number): Promise<Station | null>;
}
