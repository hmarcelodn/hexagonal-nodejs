import { Service } from "typedi";
import { StationPort } from "../../timetable/application/port/out";
import { TimeTableStationId } from "../../timetable/domain";
import { StationApi } from "../../train/adapters/in/api";

@Service()
export class TimeTableStationApi implements StationPort {
    constructor(
        private readonly stationApi: StationApi,
    ) {}

    getStation = async (id: number): Promise<TimeTableStationId> => {
        const station = await this.stationApi.getStation(id);
        return new TimeTableStationId(station!.getId); 
    }
}
