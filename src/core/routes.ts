import { Router } from "express";
import { userCreateController } from "../modules/controllers/user/userCreateController";
import { userDeleteController } from "../modules/controllers/user/userDeleteController";
import { userGetAllController } from "../modules/controllers/user/userGetAllController";
import { userUpdateController } from "../modules/controllers/user/userUpdateController";

const router = Router();

router.get("/user", userGetAllController);
router.post("/user", userCreateController);
router.put("/user", userUpdateController);
router.delete("/user", userDeleteController);

export { router };
