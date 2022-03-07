import { User } from "@prisma/client";
import { Request, Response } from "express";
import { userUpdateResolver } from "../../resolvers/user/userUpdateResolver";

export const userUpdateController = async (
	request: Request,
	response: Response,
): Promise<Response<User>> => {
	const user = await userUpdateResolver(request.body);

	return response.status(201).json({
		message: "✨ user successfully update updated",
		user,
	});
};
