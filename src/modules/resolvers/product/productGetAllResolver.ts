import { Product, Sale } from "@prisma/client";
import prisma from "../../../client";

type ObjectLiteral = {
	[key: string]: any;
};

type Rest = {
	key: string;
	value: string;
};

const lowerCase = (word: string) => word.toLowerCase();

const filter = (
	list: Product[] & {
		sale?: Sale[];
	},
	key: string,
	value: string,
) => {
	if (!list || !key) {
		return list;
	}

	const fn: ObjectLiteral = {
		name: () =>
			list
				.filter((data) => lowerCase(data.name).includes(lowerCase(value)))
				.sort((a, b) => a.name.localeCompare(b.name)),
		brand: () =>
			list.filter((data) => lowerCase(data.brand) === lowerCase(value)),
		price: () =>
			list
				.filter((data) => data.price === parseFloat(value))
				.sort((a, b) => a.price - b.price),
		sale: () => list.sale?.filter((data) => data),
	};

	console.log(fn[key]());

	return fn[key]();
};

export const productGetAllResolver = async (rest: Rest): Promise<Product[]> => {
	const products = await prisma.product.findMany({
		include: {
			sale: true,
		},
	});

	if (!products) {
		throw new Error("Not a found products in database");
	}

	return await filter(products, rest.key, rest.value);
};
