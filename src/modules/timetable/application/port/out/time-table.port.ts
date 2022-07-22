import { TimeTable } from '../../../domain';

export interface TimeTablePort {
    createTimeTable(timeTable: TimeTable): Promise<TimeTable>;
    getTimeTableByTrain(id: number): Promise<TimeTable>;
}
