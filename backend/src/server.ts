import express from 'express'
import { sequelize } from './database'
import * as dotenv from "dotenv";
import { adminJs, adminJsRouter } from './adminjs';
dotenv.config({ path: __dirname+'../../.env' });

const app = express()

app.use(adminJs.options.rootPath, adminJsRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log('DB connection successfull.')
  })
  console.log(`Server started successfuly at port ${PORT}`)
})