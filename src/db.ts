import { DataSource } from "typeorm";
import { Users } from "./Entities/User";

export const connectDB = async () => {
  await new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "prueba",
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
