import { User } from "@prisma/client";
import { Request, Response } from "express";
import { userGetAllResolver } from "../../resolvers/user/userGetAllResolver";

export const userGetAllController = async (
	request: Request,
	response: Response,
): Promise<Response<User[]>> => {
	const users = await userGetAllResolver();

	return response.status(200).json({
		message: "✨ users returned successfully!",
		users,
	});
};
