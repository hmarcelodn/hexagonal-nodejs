import { TimeTableStationId } from '../../../domain';

export interface StationPort {
    getStation(id: number): Promise<TimeTableStationId>;
}
