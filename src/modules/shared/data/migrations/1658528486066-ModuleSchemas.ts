import {MigrationInterface, QueryRunner} from "typeorm";

export class ModuleSchemas1658528486066 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE SCHEMA IF NOT EXISTS train;
            CREATE SCHEMA IF NOT EXISTS timetable;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP SCHEMA IF EXISTS train;
            DROP SCHEMA IF EXISTS timetable;
        `);
    }

}
