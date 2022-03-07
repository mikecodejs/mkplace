import express, { Application } from "express";
import morgan from "morgan";

const app: Application = express();

app.use(morgan("dev"));
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

const port = 8080;

app.listen(port, () =>
	console.log(`✨ API is running on http://localhost:${port}`),
);
