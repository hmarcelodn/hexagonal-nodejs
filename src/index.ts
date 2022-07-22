import 'reflect-metadata';
import express from 'express';
import { Container } from 'typedi';
import { App } from './app';
import { AppDataSource } from './modules/shared/data-source';
import { TrainRoute } from './modules/shared/routes';
// import { CreateTrainService, GetTrainService } from './modules/train/application/service';
// import { TrainPersistanceAdapter } from './modules/train/adapters/out/persistance';

(async () => {
    const dataSource = await AppDataSource.initialize();
    // Container.set(
    //     'create-train.usecase', 
    //     new CreateTrainService(new TrainPersistanceAdapter(), null)
    // );
    
    // Container.set(
    //     'get-train.usecase', 
    //     new GetTrainService()
    // );

    const api = new App(express(), [
        Container.get(TrainRoute),
    ]);

    const shutdown = () => {
        process.exit();
    };
    
    process.on('SIGTERM', shutdown);
    process.on('SIGINT', shutdown);
})();
