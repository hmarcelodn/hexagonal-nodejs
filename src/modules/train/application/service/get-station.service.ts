import { Inject } from 'typedi';
import { Station } from '../../domain';
import { GetStationUseCase } from '../port/in';
import { LoadStationPort } from '../port/out';

export class GetStationService implements GetStationUseCase {
    constructor (
        @Inject('load-station.port')
        private readonly loadStationPort: LoadStationPort,
    ) {}

    getStation = async (stationId: number): Promise<Station | null> => {
        return await this.loadStationPort.getStation(stationId);
    }
}
