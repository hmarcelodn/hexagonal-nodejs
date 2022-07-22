import {MigrationInterface, QueryRunner} from "typeorm";

export class StationSeed1658501431139 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            insert into station("name") values ('Amsterdam'); 
            insert into station("name") values ('Paris'); 
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            delete from station;
        `);
    }

}
