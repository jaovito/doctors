import { MigrationInterface, QueryRunner } from 'typeorm';
import { format } from 'date-fns';

export class SeedSpecialties1624189623907 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO specialty (id, name, created_at, updated_at) VALUES ("c465171d-e482-4901-aaa1-f29328b6159b", "Alergologia", "${format(
        new Date(),
        'yyyy-MM-dd HH:mm:ss',
      )}", "${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}");`,
    );

    await queryRunner.query(
      `INSERT INTO specialty (id, name, created_at, updated_at) VALUES ("b6f94dd9-e7b3-461a-abc8-1301593036b2", "Angiologia", "${format(
        new Date(),
        'yyyy-MM-dd HH:mm:ss',
      )}", "${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}");`,
    );

    await queryRunner.query(
      `INSERT INTO specialty (id, name, created_at, updated_at) VALUES ("d08481f9-d363-4dae-bbbb-1a68178c25df", "Buco Maxilo", "${format(
        new Date(),
        'yyyy-MM-dd HH:mm:ss',
      )}", "${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}");`,
    );

    await queryRunner.query(
      `INSERT INTO specialty (id, name, created_at, updated_at) VALUES ("d950eeb6-1595-47b3-bf3b-293cafb59c1d", "Cardiologia clínica", "${format(
        new Date(),
        'yyyy-MM-dd HH:mm:ss',
      )}", "${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}");`,
    );

    await queryRunner.query(
      `INSERT INTO specialty (id, name, created_at, updated_at) VALUES ("af938127-71c3-4d5f-8848-5d02c26f72fc", "Cardiologia infantil", "${format(
        new Date(),
        'yyyy-MM-dd HH:mm:ss',
      )}", "${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}");`,
    );

    await queryRunner.query(
      `INSERT INTO specialty (id, name, created_at, updated_at) VALUES ("c26d5680-c425-405d-bff6-8a336c116792", "Cirurgia cabeça e pescoço", "${format(
        new Date(),
        'yyyy-MM-dd HH:mm:ss',
      )}", "${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}");`,
    );

    await queryRunner.query(
      `INSERT INTO specialty (id, name, created_at, updated_at) VALUES ("78fae65d-28ce-45ec-9bd0-8e485602dec1", "Cirurgia cardíaca", "${format(
        new Date(),
        'yyyy-MM-dd HH:mm:ss',
      )}", "${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}");`,
    );

    await queryRunner.query(
      `INSERT INTO specialty (id, name, created_at, updated_at) VALUES ("fd4faaa0-ba2c-4c5a-8d06-f8c8fd8092b2", "Cirurgia de tórax", "${format(
        new Date(),
        'yyyy-MM-dd HH:mm:ss',
      )}", "${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}");`,
    );

    await queryRunner.query(
      `INSERT INTO doctor (id, name, crm, telephone, celphone, cep, created_at, updated_at) VALUES ("8945a8b4-0e55-4daf-87f5-d994b06755af", "John Doe Doctor", 123456, 1588193921, 15988193921, 18077200, "${format(
        new Date(),
        'yyyy-MM-dd HH:mm:ss',
      )}", "${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}");`,
    );

    await queryRunner.query(
      `INSERT INTO doctor_specialties_specialty (doctorId, specialtyId) VALUES ("8945a8b4-0e55-4daf-87f5-d994b06755af", "fd4faaa0-ba2c-4c5a-8d06-f8c8fd8092b2");`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "DELETE FROM doctor_specialties_specialty WHERE doctorId='8945a8b4-0e55-4daf-87f5-d994b06755af';",
    );

    await queryRunner.query(
      "DELETE FROM doctor WHERE id='8945a8b4-0e55-4daf-87f5-d994b06755af';",
    );

    await queryRunner.query(
      "DELETE FROM specialty WHERE id='fd4faaa0-ba2c-4c5a-8d06-f8c8fd8092b2';",
    );

    await queryRunner.query(
      "DELETE FROM specialty WHERE id='78fae65d-28ce-45ec-9bd0-8e485602dec1';",
    );

    await queryRunner.query(
      "DELETE FROM specialty WHERE id='c26d5680-c425-405d-bff6-8a336c116792';",
    );

    await queryRunner.query(
      "DELETE FROM specialty WHERE id='af938127-71c3-4d5f-8848-5d02c26f72fc';",
    );

    await queryRunner.query(
      "DELETE FROM specialty WHERE id='d950eeb6-1595-47b3-bf3b-293cafb59c1d';",
    );

    await queryRunner.query(
      "DELETE FROM specialty WHERE id='d08481f9-d363-4dae-bbbb-1a68178c25df';",
    );

    await queryRunner.query(
      "DELETE FROM specialty WHERE id='b6f94dd9-e7b3-461a-abc8-1301593036b2';",
    );

    await queryRunner.query(
      "DELETE FROM specialty WHERE id='c465171d-e482-4901-aaa1-f29328b6159b';",
    );
  }
}
