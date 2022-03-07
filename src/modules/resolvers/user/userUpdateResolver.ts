import { User } from "@prisma/client";
import prisma from "../../../client";

export const userUpdateResolver = async (user: User): Promise<User> => {
	const isUser = await prisma.user.findUnique({ where: { id: user.id } });

	if (!isUser) {
		throw new Error("user does not exists!");
	}

	return await prisma.user.update({
		where: { id: user.id },
		data: {
			name: user.name,
			email: user.email,
			acceptTermsAndConditions: user.acceptTermsAndConditions,
		},
	});
};
