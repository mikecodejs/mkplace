import { User } from "@prisma/client";
import prisma from "../../../client";

export const userCreateResolver = async (user: User): Promise<User> => {
	if (!user.acceptTermsAndConditions) {
		throw new Error("User must accept terms!");
	}

	return await prisma.user.create({
		data: {
			name: user.name,
			email: user.email,
			acceptTermsAndConditions: user.acceptTermsAndConditions,
		},
	});
};
