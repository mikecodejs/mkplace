import { Router } from "express";

import { userCreateController } from "../modules/controllers/user/userCreateController";
import { userDeleteController } from "../modules/controllers/user/userDeleteController";
import { userGetAllController } from "../modules/controllers/user/userGetAllController";
import { userUpdateController } from "../modules/controllers/user/userUpdateController";

import { productCreateController } from "../modules/controllers/product/productCreateController";

const router = Router();

router.get("/user", userGetAllController);
router.post("/user", userCreateController);
router.put("/user/:id", userUpdateController);
router.delete("/user/:id", userDeleteController);

router.post("/product", productCreateController);

export { router };
