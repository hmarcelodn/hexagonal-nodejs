import { Service } from 'typedi';
import { TimeTableTrainId } from '../../timetable/domain';
import { Train } from '../../train/domain';

@Service()
export class TimeTableTrainMapper {
    toDomain(trainEntity: Train): TimeTableTrainId {
        return new TimeTableTrainId(trainEntity.getId);
    }
}
