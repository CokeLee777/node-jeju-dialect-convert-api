import * as path from "path";
import dotenv from "dotenv";
dotenv.config({
    path: path.resolve(__dirname, `.env`)
});
import express, {NextFunction, Request, Response} from "express";
import morgan from "morgan";

import jejuDialectController from "./jeju/jeju-dialect.controller";

const app = express();

//Content-Type: application/json
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/jeju-dialect", jejuDialectController);

app.listen(3001, () => {
    console.log(`listening on 3001`);
});