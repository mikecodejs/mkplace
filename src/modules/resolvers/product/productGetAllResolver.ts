import { Product } from "@prisma/client";
import prisma from "../../../client";

export const productGetAllResolver = async (): Promise<Product[]> => {
	const products = await prisma.product.findMany({
		include: {
			sale: true,
		},
	});

	if (!products || products.length === 0) {
		throw new Error("Not a found products in database");
	}

	return products;
};
