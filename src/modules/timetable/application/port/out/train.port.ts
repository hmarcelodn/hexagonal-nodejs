import { TimeTableTrainId } from '../../../domain';

export interface TrainPort {
    getTrain(trainId: number): Promise<TimeTableTrainId>;
}
