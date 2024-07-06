import * as dotenv from "dotenv";
dotenv.config();
import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";
import cors from "cors";

const app: Express = express();
const port = process.env.PORT || 3001;
const dbname = process.env.DB_NAME;
const dbuser = process.env.DB_USER;
const dbpass = process.env.DB_PASS;

app.use(express.json());
app.use(cors());

const mongoURI: string =
  `mongodb+srv://${dbuser}:${dbpass}` +
  `@personalfinancetracker.kcz90c9.mongodb.net/` +
  `?retryWrites=true&w=majority&appName=${dbname}`;

mongoose
  .connect(mongoURI)
  .then(() => console.log("CONNECTED TO MONGODB!"))
  .catch((err) => console.error("Failed to connect to MONGODB:", err));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
