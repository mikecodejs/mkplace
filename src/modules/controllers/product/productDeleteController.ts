import { Product } from "@prisma/client";
import { Request, Response } from "express";
import { productDeleteResolver } from "../../resolvers/product/productDeleteResolver";

export const productDeleteController = async (
	request: Request,
	response: Response,
): Promise<Response<Product>> => {
	const id = request.params.id;

	await productDeleteResolver(id);

	return response.status(200).json({
		message: "✨ product successfully deleted",
	});
};
