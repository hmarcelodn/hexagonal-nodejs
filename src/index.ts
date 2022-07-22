import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import { Container } from 'typedi';
import { App } from './app';
import { AppDataSource } from './modules/shared/data/config/data-source';
import { TrainRoute, TimeTableRoute, CustomerRoute } from './modules/shared/routes';
import { containerConfig } from './config';

(async () => {
    console.log(process.env.TYPEORM_HOST);
    await AppDataSource.initialize();
    containerConfig();

    const api = new App(express(), [
        Container.get(TrainRoute),
        Container.get(TimeTableRoute),
        Container.get(CustomerRoute),
    ]);

    const shutdown = () => {
        process.exit();
    };
    
    process.on('SIGTERM', shutdown);
    process.on('SIGINT', shutdown);
})();
