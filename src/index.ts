import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import { Container } from 'typedi';
import { App } from './app';
import { AppDataSource } from './modules/shared/data/config/data-source';
import { TrainRoute, TimeTableRoute } from './modules/shared/routes';
import { CreateTrainService, GetTrainsService, GetStationService, GetTrainService } from './modules/train/application/service';
import { TrainPersistanceAdapter } from './modules/train/adapters/out/persistance';
import { TrainMapper } from './modules/train/application/mapper';
import { CreateTimeTableService } from './modules/timetable/application/services';
import { TimeTablePersistanceAdapter } from './modules/timetable/adapters/out/persistance';
import { TimeTableStationApi, TimeTableTrainApi } from './modules/shared/api';

(async () => {
    await AppDataSource.initialize();
    const trainPersistanceAdapter = Container.get(TrainPersistanceAdapter);
    const timeTablePersistanceAdapter = Container.get(TimeTablePersistanceAdapter);
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

    const timeTableTrainApi = Container.get(TimeTableTrainApi);
    const timeTableStationApi = Container.get(TimeTableStationApi)

    Container.set(
        'create-timetable.usecase',
        new CreateTimeTableService(timeTablePersistanceAdapter, timeTableStationApi, timeTableTrainApi),
    )

    const api = new App(express(), [
        Container.get(TrainRoute),
        Container.get(TimeTableRoute),
    ]);

    const shutdown = () => {
        process.exit();
    };
    
    process.on('SIGTERM', shutdown);
    process.on('SIGINT', shutdown);
})();
