import { Service } from 'typedi';
import { AppDataSource } from '../../../../shared/data/config/data-source';
import { TimeTablePort } from '../../../application/port/out';
import { TimeTable } from '../../../domain';
import { TimeTableEntity } from './entities';
import { TimeTableMapper } from './mappers';

@Service()
export class TimeTablePersistanceAdapter implements TimeTablePort {
    constructor(
        private readonly timeTableRepository = AppDataSource.getRepository(TimeTableEntity),
        private readonly timeTableMapper: TimeTableMapper,
    ) {}

    createTimeTable = async (timeTable: TimeTable): Promise<TimeTable> => {
        const timeTableEntity = this.timeTableMapper.toEntity(timeTable);
        return this.timeTableMapper.toDomain(await this.timeTableRepository.save(timeTableEntity));
    }
    
    getTimeTableByTrain(id: number): Promise<TimeTable> {
        throw new Error('Method not implemented.');
    }
}
