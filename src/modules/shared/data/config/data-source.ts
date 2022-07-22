import { DataSource } from 'typeorm';
import { environment } from '../../../../config/env.config';
import { TimeTableEntity } from '../../../timetable/adapters/out/persistance/entities';
import { StationEntity, TrainEntity } from '../../../train/adapters/out/persistance/entities';
import { StationSeed1658501431139 } from './../migrations/1658501431139-stationSeed';

console.log('environment', environment);

export const AppDataSource = new DataSource({
    type: "postgres",
    host: environment.TYPEORM_HOST,
    port: Number(environment.TYPEORM_PORT),
    username: environment.TYPEORM_USERNAME,
    password: environment.TYPEORM_PASSWORD,
    database: environment.TYPEORM_DATABASE,
    synchronize: true,
    logging: false,
    entities: [
        TrainEntity, 
        StationEntity, 
        TimeTableEntity
    ],
    migrations: [
        StationSeed1658501431139
    ],
    subscribers: [],
    migrationsRun: true,
})
