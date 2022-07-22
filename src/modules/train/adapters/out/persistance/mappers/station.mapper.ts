import { Service } from 'typedi';
import { Station } from '../../../../domain';
import { StationEntity } from '../entities';

@Service()
export class StationMapper {
    toDomain(stationEntity: StationEntity): Station {
        return Station.withId(
            stationEntity.id,
            stationEntity.name
        );
    }
}
