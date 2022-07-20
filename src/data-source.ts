import "reflect-metadata"
import { DataSource } from "typeorm"
import { TrainTypeOrmEntity } from "./modules/train/adapters/out/persistance/entities/train.entity"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Pass2020!",
    database: "railway_dev",
    synchronize: true,
    logging: false,
    entities: [TrainTypeOrmEntity],
    migrations: [],
    subscribers: [],
})
