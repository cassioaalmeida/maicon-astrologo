
const dotenv = require('dotenv')
const path = require('path')
dotenv.config({ path: __dirname+'../../.env' });
module.exports = {
  local: {
    dialect: 'postgres',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
  }
}