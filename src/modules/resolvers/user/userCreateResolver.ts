import { User } from "@prisma/client";
import { Context } from "../../../context";

export const userCreateResolver = async (
	user: User,
	ctx: Context,
): Promise<User> => {
	if (!user.acceptTermsAndConditions) {
		throw new Error("User must accept terms!");
	}

	return await ctx.prisma.user.create({
		data: {
			name: user.name,
			email: user.email,
			acceptTermsAndConditions: user.acceptTermsAndConditions,
		},
	});
};
