import { Sale } from "@prisma/client";
import prisma from "../../../client";

export const saleCreateResolver = async (sale: Sale): Promise<Sale> => {
	const isUser = await prisma.user.findUnique({ where: { id: sale.userId } });
	const isProduct = await prisma.product.findUnique({
		where: { id: sale.productId },
	});

	if (!isUser) {
		throw new Error("user does not exists!");
	}

	if (!isProduct) {
		throw new Error("product does not exists!");
	}

	return await prisma.sale.create({
		data: {
			userId: sale.userId,
			productId: sale.productId,
		},
	});
};
