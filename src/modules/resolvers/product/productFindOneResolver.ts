import { Product } from "@prisma/client";
import prisma from "../../../client";

export const productFindOneResolver = async (id: string): Promise<Product> => {
	const isProduct = await prisma.product.findUnique({ where: { id } });

	if (!isProduct) {
		throw new Error("Not a found product in database");
	}

	return isProduct;
};
