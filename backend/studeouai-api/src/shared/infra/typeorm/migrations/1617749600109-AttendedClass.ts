import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class AttendedClass1617749600109 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "attended_class",
        columns: [
          { name: "id", type: "uuid", isPrimary: true },
          { name: "class_id", type: "uuid" },
          { name: "user_id", type: "uuid" },
          { name: "status", type: "boolean", default: "false" },
          { name: "created_at", type: "timestamp", default: "now()" },
          { name: "updated_at", type: "timestamp", default: "now()" },
        ],
        foreignKeys: [
          {
            name: "FK_Attended_Class",
            referencedTableName: "class",
            referencedColumnNames: ["id"],
            columnNames: ["class_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FK_Attended_Class_User",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("attended_class");
  }
}
