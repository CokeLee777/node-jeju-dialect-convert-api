import * as fs from "fs";
import JejuDialect from "./jeju-dialect.model";
const json2xls = require("json2xls");

export const convertJsonToJsonFile = (jsonObject: Array<Object>) => {
    const jejuDictionary = JSON.stringify(jsonObject);
    fs.writeFileSync("static/jeju-dialect.json", jejuDictionary);
}

export const convertJsonToExcelFile = (jsonObject: Array<Object>) => {
    const jejuDictionary = json2xls(jsonObject);
    fs.writeFileSync("static/jeju-dialect.xlsx", jejuDictionary, "binary");
}

export const convertJsonToDatabase = (jsonObject: Array<Object>) => {
    JejuDialect.remove();
    JejuDialect.insertMany(jsonObject)
        .then(() => {
            console.log("Insert data successful");
        })
        .catch((error) => {
            console.error(`Insert data failed=${error}`);
        })
}