import express, { Router } from 'express';
import CartController from '../../controllers/carts/Cart.Controller';
let router: Router = express.Router();

router
    .post("/create",CartController.create)
    .post("/findOne/:id",CartController.findOne)
    .post("/findMany",CartController.findMany)
    .post("/detail/:id",CartController.findOne)
    .post("/delete",CartController.delete)
    .put("/update",CartController.update);
export default router;