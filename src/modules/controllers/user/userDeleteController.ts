import { User } from "@prisma/client";
import { Request, Response } from "express";
import { userDeleteResolver } from "../../resolvers/user/userDeleteResolver";

export const userDeleteController = async (
	request: Request,
	response: Response,
): Promise<Response<User>> => {
	const id = request.params.id;

	await userDeleteResolver(id);

	return response.status(200).json({
		message: "✨ user successfully deleted",
	});
};
