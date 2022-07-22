import { Service } from 'typedi';
import { TimeTable } from '../../../../domain';
import { TimeTableEntity } from '../entities';

@Service()
export class TimeTableMapper {
    toDomain(timeTableEntity: TimeTableEntity): TimeTable {
        const timeTable = new TimeTable(timeTableEntity.id, timeTableEntity.trainId);
        timeTable.setRoutes(timeTableEntity.sourceStationId, timeTableEntity.destinationStationId);
        timeTable.schedule(timeTableEntity.departureDate, timeTableEntity.arrivalDate);
        
        return timeTable;
    }

    toEntity(timeTable: TimeTable): TimeTableEntity {
        const timeTableEntity = new TimeTableEntity();
        timeTableEntity.trainId = timeTable.getTrainId.id;
        timeTableEntity.arrivalDate = timeTable.getArrivalDate;
        timeTableEntity.departureDate = timeTable.getDepartureDate;
        timeTableEntity.sourceStationId = timeTable.getSourceStationId.id;
        timeTableEntity.destinationStationId = timeTable.getDestinationStationId.id;

        return timeTableEntity;
    }
}
