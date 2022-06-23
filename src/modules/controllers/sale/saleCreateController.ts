import { User } from "@prisma/client";
import { Request, Response } from "express";
import { saleCreateResolver } from "../../resolvers/sale/saleCreateResolver";

export const saleCreateController = async (
	request: Request,
	response: Response,
): Promise<Response<User>> => {
	const sale = await saleCreateResolver(request.body);

	return response.status(201).json({
		message: "✨ sale successfully created",
		sale,
	});
};
