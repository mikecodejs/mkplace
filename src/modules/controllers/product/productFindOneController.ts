import { Product } from "@prisma/client";
import { Request, Response } from "express";
import { productFindOneResolver } from "../../resolvers/product/productFindOneResolver";

export const productFindOneController = async (
	request: Request,
	response: Response,
): Promise<Response<Product>> => {
	const id = request.params.id;

	const product = await productFindOneResolver(id);

	return response.status(200).json({
		message: "✨ product returned successfully!",
		product,
	});
};
