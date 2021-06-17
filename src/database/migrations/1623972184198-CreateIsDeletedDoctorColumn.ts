import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class CreateIsDeletedDoctorColumn1623972184198
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'doctor',
      new TableColumn({
        name: 'isDeleted',
        type: 'boolean',
        default: false,
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('doctor', 'isDeleted');
  }
}
