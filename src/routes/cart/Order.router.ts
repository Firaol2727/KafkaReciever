import express, { Router } from 'express';
import OrderController from '../../controllers/carts/Order.Controller';
let router: Router = express.Router();

router
    .post("/create",OrderController.create)
    .post("/findOne/:id",OrderController.findOne)
    .post("/findMany",OrderController.findMany)
    .post("/detail/:id",OrderController.findOne)
    .post("/delete",OrderController.delete)
    .put("/update",OrderController.update);
export default router;