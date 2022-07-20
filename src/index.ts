import 'reflect-metadata';
import express from 'express';
import { Container } from 'typedi';
import dotenv from 'dotenv';
import { createConnection, getCustomRepository } from 'typeorm';
import { App } from './app';
import { TrainRoute } from './routes';
import { CreateTrainService, GetTrainService } from './modules/train/application/service';
import { TrainRepository } from './modules/train/adapters/out/persistance/repository/train.repository';

(async () => {
    dotenv.config();
    await createConnection();
    getCustomRepository(TrainRepository)
    // Container.set('create-train.usecase', new CreateTrainService(getCustomRepository(TrainRepository)));
    // Container.set('get-train.usecase', new GetTrainService);

    // const api = new App(express(), [
    //     Container.get(TrainRoute),
    // ]);

    const shutdown = () => {
        process.exit();
    };
    
    process.on('SIGTERM', shutdown);
    process.on('SIGINT', shutdown);
})();
