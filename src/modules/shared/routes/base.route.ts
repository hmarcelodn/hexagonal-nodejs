import { Router } from 'express';

export abstract class BaseRoute {
    public abstract path: string;

    constructor(
        public router = Router(),
    ) {}

    protected abstract initializeRoutes(): void;
}