import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTablePosition1716657090180 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE public.positions (
          id SERIAL PRIMARY KEY,
          user_id integer NOT NULL,
          asset character varying NOT NULL,
          type character varying NOT NULL,
          status character varying NOT NULL,
          qtd integer NOT NULL,
          price double precision NOT NULL,
          value double precision NOT NULL,
          created_at timestamp without time zone DEFAULT now() NOT NULL,
          updated_at timestamp without time zone DEFAULT now() NOT NULL,
          FOREIGN KEY (user_id) REFERENCES public.users(id)
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE public.positions;
    `);
  }
}
