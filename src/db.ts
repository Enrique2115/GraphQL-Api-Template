import { DataSource } from "typeorm"

export const connectDB = async () => {
    await new DataSource({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "",
        database: "prueba",
        synchronize: false,
        logging: false,
        entities:[],
        migrations:[],
        subscribers:[],
        ssl: false,   
        multipleStatements: true,
    }).initialize().then(() => {
        console.log("DB connected");
    });
}
    