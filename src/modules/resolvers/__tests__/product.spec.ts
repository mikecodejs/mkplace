import { prismaMock } from "../../../singleton";

import { productCreateResolver } from "../product/productCreateResolver";
import { productDeleteResolver } from "../product/productDeleteResolver";
import { productGetAllResolver } from "../product/productGetAllResolver";
import { productUpdateResolver } from "../product/productUpdateResolver";

const mockDate = new Date();

const products = [
	{
		id: "622019b3750df0577581017f",
		name: "Samsung Galaxy A13",
		brand: "Samsung",
		price: 2032.5,
		createdAt: mockDate,
		updatedAt: mockDate,
	},
	{
		id: "6220226bb46ecd165a731f87",
		name: "TV 60p 4K FULL HD Samsung",
		brand: "Samsung",
		price: 3489,
		createdAt: mockDate,
		updatedAt: mockDate,
	},
];

it("should create new product", () => {
	prismaMock.product.create.mockResolvedValue(products[0]);

	const test = productCreateResolver(products[0]);

	expect(test).resolves.toBeTruthy();
	expect(test).resolves.toEqual(products[0]);
});

it("should return all products", () => {
	prismaMock.product.findMany.mockResolvedValue(products);

	const test = productGetAllResolver();

	expect(test).resolves.toHaveLength(2);
	expect(test).resolves.toEqual(products);
});

it("should return an error when not finding products", () => {
	prismaMock.product.findMany.mockResolvedValue([]);

	const test = productGetAllResolver();

	expect(test).rejects.toEqual(new Error("Not a found products in database"));
});

it("should be able to update a product", () => {
	prismaMock.product.findUnique.mockResolvedValue(products[0]);
	prismaMock.product.update.mockResolvedValue(products[0]);

	const test = productUpdateResolver(products[0].id, products[0]);

	expect(test).resolves.toBeTruthy();
	expect(test).resolves.toEqual(products[0]);
});

it("should not be able to update a product if it doesn't exist", () => {
	prismaMock.user.update.mockRejectedValue(
		new Error("product does not exists!"),
	);

	const test = productUpdateResolver(products[0].id, products[0]);

	expect(test).rejects.toEqual(new Error("product does not exists!"));
});

it("should be able to delete a product", () => {
	prismaMock.product.findUnique.mockResolvedValue(products[0]);
	prismaMock.product.delete.mockResolvedValue(products[0]);

	const test = productDeleteResolver(products[0].id);

	expect(test).resolves.toBeTruthy();
});

it("should not be able to delete a product if it doesn't exist", () => {
	prismaMock.user.delete.mockRejectedValue(
		new Error("product does not exists!"),
	);

	const test = productDeleteResolver(products[0].id);

	expect(test).rejects.toEqual(new Error("product does not exists!"));
});
