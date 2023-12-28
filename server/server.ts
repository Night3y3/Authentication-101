import express, { Express, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import connect from "./database/connection";
import router from "./router/route";

const app: Express = express();

//Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny")); // used for status check
app.disable("x-powered-by"); // used for security as that less hacker can know about the server

const port = 8080;

// http Routes
app.get("/", (req: Request, res: Response) => {
  res.status(201).json("Hoa gecche bidu");
});

// api routes
app.use("/api", router);

// Start the server when database is connected
connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
    } catch (error) {
      console.log(`Cannot connect to the server because ${error}`);
    }
  })
  .catch((error) => {
    console.log(`Internal server error ${error}`);
  });
