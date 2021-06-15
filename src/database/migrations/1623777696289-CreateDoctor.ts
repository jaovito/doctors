import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateDoctor1623777696289 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
          name: 'doctors',
          columns: [
              {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                generationStrategy: 'uuid'
              }
          ];
      }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
