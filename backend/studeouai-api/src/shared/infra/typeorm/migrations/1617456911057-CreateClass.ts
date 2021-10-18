import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateClass1617456911057 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'class',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'available',
            type: 'boolean',
            default: true,
          },
          {
            name: 'type',
            type: 'varchar',
            default: false,
          },
          {
            name: 'url',
            type: 'varchar',
          },
          {
            name: 'category_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'FK_Class_Category',
            referencedTableName: 'categories',
            referencedColumnNames: ['id'],
            columnNames: ['category_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('class');
  }
}
