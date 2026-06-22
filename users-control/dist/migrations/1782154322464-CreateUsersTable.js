"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsersTable1782154322464 = void 0;
class CreateUsersTable1782154322464 {
    name = 'CreateUsersTable1782154322464';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
exports.CreateUsersTable1782154322464 = CreateUsersTable1782154322464;
//# sourceMappingURL=1782154322464-CreateUsersTable.js.map