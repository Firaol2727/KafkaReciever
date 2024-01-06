import express, { Router } from 'express';
import ProductController from '../../controllers/product/Product.Controller';
let router: Router = express.Router();

router
    .post("/create",ProductController.create)
    .post("/findOne/:id",ProductController.findOne)
    .post("/findMany",ProductController.findMany)
    .post("/detail/:id",ProductController.findOne)
    .post("/delete",ProductController.delete)
    .put("/update",ProductController.update);
export default router;