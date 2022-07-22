import { TimeTable } from '../../../domain';

export interface CreateTimeTableInputModel {
    trainId: number;
    sourceStationId: number;
    destinationStationId: number;
    departureDate: Date;
    arrivalDate: Date;
}

export interface CreateTimeTableUseCase {
    create(inputModel: CreateTimeTableInputModel): Promise<TimeTable>;
}
