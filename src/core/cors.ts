import { Request, Response, NextFunction, Application } from "express";
import cors from "cors";

export const corsMiddleware = (
	request: Request,
	response: Response,
	next: NextFunction,
) => {
	response.header("Access-Control-Allow-Origin", "*");
	response.header(
		"Access-Control-Allow-Headers",
		"Authorization, Origin, X-Requested-With, Content-Type, Accept",
	);
	response.header(
		"Access-Control-Allow-Methods",
		"GET, POST, PUT, PATCH, DELETE",
	);

	cors();

	next();
};
