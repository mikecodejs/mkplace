import { User } from "@prisma/client";
import { Request, Response } from "express";
import { userDeleteResolver } from "../../resolvers/user/userDeleteResolver";

export const userDeleteController = async (
	request: Request,
	response: Response,
): Promise<Response<User>> => {
	await userDeleteResolver(request.body.id);

	return response.status(200).json({
		message: "✨ user successfully deleted",
	});
};
