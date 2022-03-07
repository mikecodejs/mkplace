import express, { Application } from "express";
import morgan from "morgan";

import "express-async-errors";

import { router } from "./core/routes";
import { corsMiddleware } from "./core/cors";
import { errorMiddleware } from "./core/error";

const app: Application = express();

app.use(corsMiddleware);

app.use(morgan("dev"));
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.use(errorMiddleware);

const port = 8080;

app.listen(port, () =>
	console.log(`✨ API is running on http://localhost:${port}`),
);
