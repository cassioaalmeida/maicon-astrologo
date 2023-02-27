import { Sequelize } from 'sequelize'
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'../../../.env' });

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DATABASE_HOST,
  port: 5432,
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
	define: {
    underscored: true
  }
})