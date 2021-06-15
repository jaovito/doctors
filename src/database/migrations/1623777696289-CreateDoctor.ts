import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateDoctor1623777696289 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'doctors',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '120',
          },
          {
            name: 'CRM',
            type: 'int',
            width: 7,
          },
          {
            name: 'telephone',
            type: 'number',
          },
          {
            name: 'celphone',
            type: 'number',
          },
          {
            name: 'cep',
            type: 'number',
          },
          {
            name: 'specialty_id',
            type: 'uuid',
          },
        ],

        foreignKeys: [
          {
            name: 'DoctorSpeciality',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
