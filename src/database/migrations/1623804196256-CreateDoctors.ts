import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateDoctors1623804196256 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'doctors',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '120',
          },
          {
            name: 'crm',
            type: 'int',
            width: 7,
          },
          {
            name: 'telephone',
            type: 'numeric',
          },
          {
            name: 'celphone',
            type: 'numeric',
            width: 11,
          },
          {
            name: 'cep',
            type: 'int',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('doctors');
  }
}
