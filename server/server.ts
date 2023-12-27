import express, { Express, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";

const app: Express = express();

//Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny")); // used for status check
app.disable("x-powered-by"); // used for security as that less hacker can know about the server

const port = 5000;

// http Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
