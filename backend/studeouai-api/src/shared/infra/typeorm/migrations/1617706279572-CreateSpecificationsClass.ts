import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateSpecificationsClass1617706279572
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "specifications_class",
        columns: [
          {
            name: "class_id",
            type: "uuid",
          },
          {
            name: "specification_id",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "specifications_class",
      new TableForeignKey({
        name: "FK_Specifications_Class_Specification",
        referencedTableName: "specifications",
        referencedColumnNames: ["id"],
        columnNames: ["specification_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NUll",
      })
    );

    await queryRunner.createForeignKey(
      "specifications_class",
      new TableForeignKey({
        name: "FK_Specifications_Class_Class",
        referencedTableName: "class",
        referencedColumnNames: ["id"],
        columnNames: ["class_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NUll",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      "specifications_class",
      "FK_Specifications_Class"
    );
    await queryRunner.dropForeignKey(
      "specifications_class",
      "FK_Specifications_Classes_Specification"
    );
    await queryRunner.dropTable("specifications_class");
  }
}
