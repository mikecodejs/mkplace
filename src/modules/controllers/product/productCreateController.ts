import { Product } from "@prisma/client";
import { Request, Response } from "express";
import { productCreateResolver } from "../../resolvers/product/productCreateResolver";

export const productCreateController = async (
	request: Request,
	response: Response,
): Promise<Response<Product>> => {
	const product = await productCreateResolver(request.body);

	return response.status(201).json({
		message: "✨ product successfully created",
		product,
	});
};
