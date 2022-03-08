import { Product } from "@prisma/client";
import { Request, Response } from "express";
import { productGetAllResolver } from "../../resolvers/product/productGetAllResolver";

export const productGetAllController = async (
	request: Request,
	response: Response,
): Promise<Response<Product[]>> => {
	const products = await productGetAllResolver();

	return response.status(200).json({
		message: "✨ products returned successfully!",
		products,
	});
};
