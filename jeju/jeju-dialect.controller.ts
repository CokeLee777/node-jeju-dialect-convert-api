import express, {NextFunction, Request, Response} from "express";
import axios from "axios";
import * as jejuDialectService from "./jeju-dialect.service";

const router = express.Router();

const endPoint = `
${process.env.JEJU_DIALECT_API_URL}
?authApiKey=${process.env.OPEN_API_AUTH_KEY}
&startPage=
&pageSize=7160
&page=1
`;

router.get("/convert-to-jsonfile", (request: Request, response: Response, next: NextFunction) => {

    axios.get(endPoint)
        .then((response) => {
            return response.data.items;
        })
        .then((jsonObject: Array<Object>) => {
            jejuDialectService.convertJsonToJsonFile(jsonObject);
            return response.status(200).send("Convert to json file successful!");
        })
        .catch((error) => {
            console.error(error);
        });

});

router.get("/convert-to-excelfile", (request: Request, response: Response, next: NextFunction) => {

    axios.get(endPoint)
        .then((response) => {
            return response.data.items;
        })
        .then((jsonObject: Array<Object>) => {
            jejuDialectService.convertJsonToExcelFile(jsonObject);
            return response.status(200).send("Convert to excel file successful!");
        })
        .catch((error) => {
            console.error(error);
        });

});

router.get("/convert-to-database", (request: Request, response: Response, next: NextFunction) => {

    axios.get(endPoint)
        .then((response) => {
            return response.data.items;
        })
        .then((jsonObject: Array<Object>) => {
            jejuDialectService.convertJsonToDatabase(jsonObject);
            return response.status(200).send("Convert to database successful!");
        })
        .catch((error) => {
            console.error(error);
        });

});

export default router;