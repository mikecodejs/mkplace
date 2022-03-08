import { Product } from "@prisma/client";
import prisma from "../../../client";

export const productDeleteResolver = async (id: string): Promise<Product> => {
	const isProduct = await prisma.product.findUnique({ where: { id } });

	if (!isProduct) {
		throw new Error("product does not exists!");
	}

	return await prisma.product.delete({ where: { id } });
};
