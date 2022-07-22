import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import { Container } from 'typedi';
import { App } from './app';
import { AppDataSource } from './modules/shared/data-source';
import { TrainRoute } from './modules/shared/routes';
import { CreateTrainService, GetTrainService } from './modules/train/application/service';
import { TrainPersistanceAdapter } from './modules/train/adapters/out/persistance';
import { TrainMapper } from './modules/train/application/mapper';

(async () => {
    await AppDataSource.initialize();
    const persistanceAdapter = Container.get(TrainPersistanceAdapter);
    const trainMapper = Container.get(TrainMapper);

    Container.set(
        'create-train.usecase', 
        new CreateTrainService(
            persistanceAdapter,
            persistanceAdapter,
            trainMapper,
        )
    );
    
    Container.set(
        'get-train.usecase', 
        new GetTrainService(
            persistanceAdapter,
        )
    );

    const api = new App(express(), [
        Container.get(TrainRoute),
    ]);

    const shutdown = () => {
        process.exit();
    };
    
    process.on('SIGTERM', shutdown);
    process.on('SIGINT', shutdown);
})();
