import { prismaMock } from "../../../singleton";

import { userCreateResolver } from "../user/userCreateResolver";
import { userGetAllResolver } from "../user/userGetAllResolver";
import { userDeleteResolver } from "../user/userDeleteResolver";
import { userUpdateResolver } from "../user/userUpdateResolver";

const mockDate = new Date();

const users = [
	{
		id: "622019b3750df0577581017f",
		name: "Dwayne Johnson",
		email: "dwaynejohnson@mkplace.com",
		acceptTermsAndConditions: true,
		createdAt: mockDate,
		updatedAt: mockDate,
	},
	{
		id: "6220226bb46ecd165a731f87",
		name: "Jason Statham",
		email: "jasonstatham@mkplace.com",
		acceptTermsAndConditions: false,
		createdAt: mockDate,
		updatedAt: mockDate,
	},
];

it("should create new user", () => {
	prismaMock.user.create.mockResolvedValue(users[0]);

	const test = userCreateResolver(users[0]);

	expect(test).resolves.toBeTruthy();
	expect(test).resolves.toEqual(users[0]);
});

it("should fail if user does not accept terms", () => {
	prismaMock.user.create.mockRejectedValue(
		new Error("User must accept terms!"),
	);

	const test = userCreateResolver(users[1]);

	expect(test).rejects.toEqual(new Error("User must accept terms!"));
});

it("should return all users", () => {
	prismaMock.user.findMany.mockResolvedValue(users);

	const test = userGetAllResolver();

	expect(test).resolves.toHaveLength(2);
	expect(test).resolves.toEqual(users);
});

it("should return an error when not finding users", () => {
	prismaMock.user.findMany.mockRejectedValue(
		new Error("Not a found users in database"),
	);

	const test = userGetAllResolver();

	expect(test).rejects.toEqual(new Error("Not a found users in database"));
});

it("should be able to update a user", () => {
	prismaMock.user.findUnique.mockResolvedValue(users[0]);
	prismaMock.user.update.mockResolvedValue(users[0]);

	const test = userUpdateResolver(users[0].id, users[0]);

	expect(test).resolves.toBeTruthy();
	expect(test).resolves.toEqual(users[0]);
});

it("should be able to delete a user", () => {
	prismaMock.user.findUnique.mockResolvedValue(users[0]);
	prismaMock.user.delete.mockResolvedValue(users[0]);

	const test = userDeleteResolver(users[0].id);

	expect(test).resolves.toBeTruthy();
});
