import express from 'express';
import { FlightRoute } from './routes';
import { App } from './app';

(() => {
    const api = new App(express(), [
        new FlightRoute(),
    ]);
    
    const shutdown = () => {
        process.exit();
    };
    
    process.on('SIGTERM', shutdown);
    process.on('SIGINT', shutdown);
})();
