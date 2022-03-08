import { Product } from "@prisma/client";
import prisma from "../../../client";

export const productUpdateResolver = async (
	id: string,
	product: Product,
): Promise<Product> => {
	const isProduct = await prisma.product.findUnique({ where: { id } });

	if (!isProduct) {
		throw new Error("product does not exists!");
	}

	return await prisma.product.update({
		where: { id: id },
		data: {
			name: product.name,
			brand: product.brand,
			price: product.price,
		},
	});
};
