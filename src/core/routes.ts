import { Router } from "express";

import { userCreateController } from "../modules/controllers/user/userCreateController";
import { userDeleteController } from "../modules/controllers/user/userDeleteController";
import { userGetAllController } from "../modules/controllers/user/userGetAllController";
import { userUpdateController } from "../modules/controllers/user/userUpdateController";

import { productCreateController } from "../modules/controllers/product/productCreateController";
import { productUpdateController } from "../modules/controllers/product/productUpdateController";
import { productDeleteController } from "../modules/controllers/product/productDeleteController";
import { productGetAllController } from "../modules/controllers/product/productGetAllController";

import { saleCreateController } from "../modules/controllers/sale/saleCreateController";
import { productFindOneController } from "../modules/controllers/product/productFindOneController";

const router = Router();

router.get("/users", userGetAllController);
router.post("/user", userCreateController);
router.put("/user/:id", userUpdateController);
router.delete("/user/:id", userDeleteController);

router.get("/product/:id", productFindOneController);
router.get("/products", productGetAllController);
router.post("/product", productCreateController);
router.put("/product/:id", productUpdateController);
router.delete("/product/:id", productDeleteController);

router.post("/sale", saleCreateController);

export { router };
