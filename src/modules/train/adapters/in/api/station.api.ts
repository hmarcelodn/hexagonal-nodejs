import { Inject, Service } from 'typedi';
import { GetStationUseCase } from '../../../application/port/in';
import { Station } from '../../../domain';

@Service()
export class StationApi {
    constructor (
        @Inject('get-station.usecase')
        private readonly getStationUseCase: GetStationUseCase,
    ) {}
    
    getStation = async (stationId: number): Promise<Station | null> => {
        return await this.getStationUseCase.getStation(stationId);
    }
}
