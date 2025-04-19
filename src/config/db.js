import { configDotenv } from "dotenv";
import { Sequelize } from "sequelize";

configDotenv();

const Database = process.env.MYSQL_DATABASE;
const Username = process.env.MYSQL_USER;
const Password = process.env.MYSQL_PASSWORD;
const Host = process.env.MYSQL_HOST;

export const sequelize = new Sequelize(Database, Username, Password, {
  dialect: "mysql",
  host: Host,
});

export const connectToDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Successfully connected to Database");
  } catch (error) {
    console.log(error);
  }
};
