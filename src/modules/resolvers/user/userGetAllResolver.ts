import { User } from "@prisma/client";
import { Context } from "../../../context";

export const userGetAllResolver = async (ctx: Context): Promise<User[]> => {
	const users = await ctx.prisma.user.findMany();

	if (!users || users.length === 0) {
		throw new Error("Not a found users in database");
	}

	return users;
};
