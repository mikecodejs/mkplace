import { Product } from "@prisma/client";
import prisma from "../../../client";

export const productCreateResolver = async (
	product: Product,
): Promise<Product> => {
	return await prisma.product.create({
		data: {
			name: product.name,
			brand: product.brand,
			price: product.price,
		},
	});
};
