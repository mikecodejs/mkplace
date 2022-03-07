import { MockContext, Context, createMockContext } from "../../../context";
import { userCreateResolver } from "../../resolvers/user/userCreateResolver";
import { userGetAllResolver } from "../../resolvers/user/userGetAllResolver";

let ctx: Context;
let mockCtx: MockContext;

beforeEach(() => {
	mockCtx = createMockContext();
	ctx = mockCtx as unknown as Context;
});

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
	mockCtx.prisma.user.create.mockResolvedValue(users[0]);

	const test = userCreateResolver(users[0], ctx);

	expect(test).resolves.toBeTruthy();
	expect(test).resolves.toEqual(users[0]);
});

it("should fail if user does not accept terms", () => {
	mockCtx.prisma.user.create.mockRejectedValue(
		new Error("User must accept terms!"),
	);

	const test = userCreateResolver(users[1], ctx);

	expect(test).rejects.toEqual(new Error("User must accept terms!"));
});

it("should return all users", () => {
	mockCtx.prisma.user.findMany.mockResolvedValue(users);

	const test = userGetAllResolver(ctx);

	expect(test).resolves.toHaveLength(2);
	expect(test).resolves.toEqual(users);
});

it("should return an error when not finding users", () => {
	mockCtx.prisma.user.findMany.mockRejectedValue(
		new Error("Not a found users in database"),
	);

	const test = userGetAllResolver(ctx);

	expect(test).rejects.toEqual(new Error("Not a found users in database"));
});
