import { hash } from "bcryptjs";
import request from "supertest";
import { Connection } from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { app } from "@shared/infra/http/app";
import createConnection from "@shared/infra/typeorm";

let connection: Connection;

const userData = {
  email: "admin@studeouai.com.br",
  password: "admin",
};
const jestTimeoutInMS = 50 * 1000;

describe("Create Specification Controller", () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    const id = uuidV4();
    const hashPassword = await hash(userData.password, 10);

    await connection.query(`
      INSERT INTO USERS(
        id, name, email, password, 
        "isAdmin", created_at
      ) values (
        '${id}', 'admin', '${userData.email}', '${hashPassword}', 
        true, 'now()'
      )
    `);
  }, jestTimeoutInMS);

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it(
    "Should be able to create a specification",
    async () => {
      const responseToken = await request(app).post("/sessions").send({
        email: userData.email,
        password: userData.password,
      });
      const { token } = responseToken.body;

      const response = await request(app)
        .post("/specifications")
        .send({
          name: "Specification Supertest",
          description: "Specification Supertest",
        })
        .set({
          Authorization: `Bearer ${token}`,
        });

      expect(response.status).toBe(201);
    },
    jestTimeoutInMS
  );

  it(
    "Should not be able to create a specifications with exactly name as before",
    async () => {
      const responseToken = await request(app).post("/sessions").send({
        email: "admin@studeouai.com.br",
        password: "admin",
      });

      const { token } = responseToken.body;

      const response = await request(app)
        .post("/specifications")
        .send({
          name: "Specification Supertest",
          description: "Specification Supertest",
        })
        .set({
          Authorization: `Bearer ${token}`,
        });

      expect(response.status).toBe(400);
    },
    jestTimeoutInMS
  );
});
