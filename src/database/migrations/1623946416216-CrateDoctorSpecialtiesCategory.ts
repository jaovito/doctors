import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CrateDoctorSpecialtiesCategory1623946416216
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'doctors_specialties_specialties',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'doctorId',
            type: 'varchar',
            generationStrategy: 'uuid',
          },
          {
            name: 'specialtiesId',
            type: 'varchar',
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
            name: 'FKDoctor',
            referencedTableName: 'doctors',
            referencedColumnNames: ['id'],
            columnNames: ['doctorId'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'FKSpecialty',
            referencedTableName: 'specialties',
            referencedColumnNames: ['id'],
            columnNames: ['specialtiesId'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('doctors_specialties_specialties');
  }
}
