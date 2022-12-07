import * as mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/jeju_dialect")
    .then(() => {
        console.log("MongoDB connection successful")
    })
    .catch((error) => {
        console.error("DB connection failed");
    });

const jejuDialect = new mongoose.Schema({
    seq: "number",
    type: "string",
    name: "string",
    siteName: "string",
    index: "string",
    contents: "string",
    engContents: "string",
    janContents: "string",
    chiContents: "string",
    sound: "string",
    soundUrl: "string",
    use: "boolean",
    category: "string"
});

const JejuDialect = mongoose.model("Schema", jejuDialect);

export default JejuDialect;