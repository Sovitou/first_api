import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();
const db = mysql.createConnection({
  host: process.env.MYSQL_HOST || "localhost",
  port: process.env.MYSQL_PORT || 3306,
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "vitou",
  database: process.env.MYSQL_DATABASE || "first_api",
});

// console.log("DB is connected");
db.connect((error) => {
  if (error) {
    console.log(error);
    console.log("not connected");
  }
  console.log("connected");
});

export default db;
