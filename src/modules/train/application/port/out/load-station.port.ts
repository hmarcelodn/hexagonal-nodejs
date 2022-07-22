import { Station } from '../../../domain/station.entity';

export interface LoadStationPort {
    getStation(stationId: number): Promise<Station>;
}
