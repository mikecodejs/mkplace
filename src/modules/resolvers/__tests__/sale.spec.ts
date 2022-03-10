import { prismaMock } from "../../../singleton";

import { saleCreateResolver } from "../sale/saleCreateResolver";

const mockDate = new Date();

const user = {
	id: "622019b3750df0577581017f",
	name: "Dwayne Johnson",
	email: "dwaynejohnson@mkplace.com",
	acceptTermsAndConditions: true,
	createdAt: mockDate,
	updatedAt: mockDate,
};

const product = {
	id: "622019b3750df0577581017f",
	name: "Samsung Galaxy A13",
	brand: "Samsung",
	price: 2032.5,
	createdAt: mockDate,
	updatedAt: mockDate,
};

const sale = {
	id: "622019b3750df0577581017f",
	userId: user.id,
	productId: product.id,
	createdAt: mockDate,
	updatedAt: mockDate,
};

it("should create new user", () => {
	prismaMock.user.findUnique.mockResolvedValue(user);
	prismaMock.product.findUnique.mockResolvedValue(product);
	prismaMock.sale.create.mockResolvedValue(sale);

	const test = saleCreateResolver(sale);

	expect(test).resolves.toBeTruthy();
	expect(test).resolves.toEqual(sale);
});

it("should not be able if user does not exists", () => {
	prismaMock.product.findUnique.mockResolvedValue(product);
	prismaMock.sale.create.mockRejectedValue(new Error("user does not exists!"));

	const test = saleCreateResolver(sale);

	expect(test).rejects.toEqual(new Error("user does not exists!"));
});

it("should not be able if product does not exists", () => {
	prismaMock.user.findUnique.mockResolvedValue(user);
	prismaMock.sale.create.mockRejectedValue(
		new Error("product does not exists!"),
	);

	const test = saleCreateResolver(sale);

	expect(test).rejects.toEqual(new Error("product does not exists!"));
});
