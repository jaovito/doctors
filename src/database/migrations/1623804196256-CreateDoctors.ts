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
            type: 'int',
          },
          {
            name: 'celphone',
            type: 'int',
          },
          {
            name: 'cep',
            type: 'int',
          },
          {
            name: 'specialty_id',
            type: 'varchar',
            isNullable: true,
            generationStrategy: 'uuid',
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

        foreignKeys: [
          {
            name: 'DoctorSpeciality',
            referencedTableName: 'doctor_specialties',
            referencedColumnNames: ['id'],
            columnNames: ['specialty_id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('doctors');
  }
}
