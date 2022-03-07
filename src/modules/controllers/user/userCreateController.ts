import { User } from "@prisma/client";
import { Request, Response } from "express";
import { userCreateResolver } from "../../resolvers/user/userCreateResolver";

export const userCreateController = async (
	request: Request,
	response: Response,
): Promise<Response<User>> => {
	const user = await userCreateResolver(request.body);

	return response.status(201).json({
		message: "✨ user successfully created ",
		user,
	});
};
