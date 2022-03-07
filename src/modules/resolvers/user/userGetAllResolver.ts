import { User } from "@prisma/client";
import prisma from "../../../client";

export const userGetAllResolver = async (): Promise<User[]> => {
	const users = await prisma.user.findMany();

	if (!users || users.length === 0) {
		throw new Error("Not a found users in database");
	}

	return users;
};
