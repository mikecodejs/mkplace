import { User } from "@prisma/client";
import { Request, Response } from "express";
import { userUpdateResolver } from "../../resolvers/user/userUpdateResolver";

export const userUpdateController = async (
	request: Request,
	response: Response,
): Promise<Response<User>> => {
	const id = request.params.id;
	const user = request.body;

	const outcome = await userUpdateResolver(id, user);

	return response.status(200).json({
		message: "✨ user successfully update updated",
		user: outcome,
	});
};
