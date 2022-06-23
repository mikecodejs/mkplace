import express, { Application } from "express";
import morgan from "morgan";
import path from "path";

import "express-async-errors";

import { corsMiddleware } from "./core/cors";
import { errorMiddleware } from "./core/error";
import { router } from "./core/routes";

const app: Application = express();

app.use(corsMiddleware);

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "..", "docs")));
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);
app.use(errorMiddleware);

const port = 8080;

app.listen(port, () =>
	console.log(`✨ API is running at http://localhost:${port}`),
);
