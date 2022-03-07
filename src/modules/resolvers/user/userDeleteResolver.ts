import { User } from "@prisma/client";
import prisma from "../../../client";

export const userDeleteResolver = async (id: string): Promise<User> => {
	const isUser = await prisma.user.findUnique({ where: { id } });

	if (!isUser) {
		throw new Error("user does not exists!");
	}

	return await prisma.user.delete({ where: { id } });
};
