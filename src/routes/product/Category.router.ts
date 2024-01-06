import express, { Router } from 'express';
import CategoryController from '../../controllers/product/Category.Controller';
let router: Router = express.Router();

router
    .post("/create",CategoryController.create)
    .post("/findOne/:id",CategoryController.findOne)
    .post("/findMany",CategoryController.findMany)
    .post("/detail/:id",CategoryController.findOne)
    .post("/delete",CategoryController.delete)
    .put("/update",CategoryController.update);
export default router;