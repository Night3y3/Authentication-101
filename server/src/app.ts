require("dotenv").config();
import express from "express";
import config from "config";
import connectToDb from "./utils/connectToDb";
import log from "./utils/logger";
import router from "./routes";

const app = express();

app.use(express.json());
app.use(router);

const port = config.get("myPort") as number;

app.listen(port, () => {
  log.info(`Server is running on port ${port}`);
  connectToDb();
});
