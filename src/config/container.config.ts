import { Container } from 'typedi';
import { TimeTableStationApi, TimeTableTrainApi } from '../modules/shared/api';
import { TimeTablePersistanceAdapter } from '../modules/timetable/adapters/out/persistance';
import { CreateTimeTableService } from '../modules/timetable/application/services';
import { TrainPersistanceAdapter } from '../modules/train/adapters/out/persistance';
import { TrainMapper } from '../modules/train/application/mapper';
import { CreateTrainService, GetStationService, GetTrainService, GetTrainsService } from '../modules/train/application/service';

export const containerConfig = () => {
    // Train Module
    const trainPersistanceAdapter = Container.get(TrainPersistanceAdapter);
    const trainMapper = Container.get(TrainMapper);

    Container.set(
        'create-train.usecase', 
        new CreateTrainService(
            trainPersistanceAdapter,
            trainPersistanceAdapter,
            trainMapper,
        )
    );
    
    Container.set(
        'get-trains.usecase', 
        new GetTrainsService(trainPersistanceAdapter)
    );

    Container.set(
        'get-train.usecase',
        new GetTrainService(trainPersistanceAdapter)
    )

    Container.set(
        'get-station.usecase',
        new GetStationService(trainPersistanceAdapter)
    );

    // TimeTable Module
    const timeTablePersistanceAdapter = Container.get(TimeTablePersistanceAdapter);

    
    // Shared Module    
    const timeTableTrainApi = Container.get(TimeTableTrainApi);
    const timeTableStationApi = Container.get(TimeTableStationApi)

    Container.set(
        'create-timetable.usecase',
        new CreateTimeTableService(
            timeTablePersistanceAdapter, 
            timeTableStationApi, 
            timeTableTrainApi
        ),
    );
}
