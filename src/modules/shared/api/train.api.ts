import { Service } from 'typedi';
import { TrainPort } from '../../timetable/application/port/out';
import { TimeTableTrainId } from '../../timetable/domain';
import { TrainApi } from '../../train/adapters/in/api';
import { TimeTableTrainMapper } from '../mapper';

@Service()
export class TimeTableTrainApi implements TrainPort {
    constructor(
        private readonly trainApi: TrainApi,
        private readonly timeTableTrainMapper: TimeTableTrainMapper,
    ) {}

    getTrain = async (trainId: number): Promise<TimeTableTrainId> => {
        const train = await this.trainApi.getTrain(trainId);
        return this.timeTableTrainMapper.toDomain(train);
    }
}
