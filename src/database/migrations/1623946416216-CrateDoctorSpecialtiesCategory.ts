import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CrateDoctorSpecialtiesCategory1623946416216
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'doctor_specialties_specialty',
        columns: [
          {
            name: 'doctorId',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'specialtyId',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
        ],

        foreignKeys: [
          {
            name: 'FKDoctor',
            referencedTableName: 'doctor',
            referencedColumnNames: ['id'],
            columnNames: ['doctorId'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'FKSpecialty',
            referencedTableName: 'specialty',
            referencedColumnNames: ['id'],
            columnNames: ['specialtyId'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('doctor_specialties_specialty');
  }
}
