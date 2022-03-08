import { Product } from "@prisma/client";
import { Request, Response } from "express";
import { productUpdateResolver } from "../../resolvers/product/productUpdateResolver";

export const productUpdateController = async (
	request: Request,
	response: Response,
): Promise<Response<Product>> => {
	const id = request.params.id;
	const product = request.body;

	const outcome = await productUpdateResolver(id, product);

	return response.status(200).json({
		message: "✨ product successfully update updated",
		product: outcome,
	});
};
