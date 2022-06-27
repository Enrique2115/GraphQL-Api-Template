import { DataSource } from "typeorm";
import { Users } from "./Entities/User";
import { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_NAME } from "./config";

export const connectDB = async () => {
  await new DataSource({
    type: "mysql",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: true, // Auto create tables
    logging: false,
    entities: [Users], // Entities to load in DB
    migrations: [],
    subscribers: [],
    ssl: false,
    multipleStatements: true,
  })
    .initialize()
    .then(() => {
      console.log("DB connected");
    });
};
