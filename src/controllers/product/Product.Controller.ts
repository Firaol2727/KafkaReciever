import express, { Router ,Request,Response} from "express";
import { ProductService } from "../../services/product/Product.service";
import { Product } from "../../models/product/Product";

export default class ProductController{
    static create(request:Request,response:Response,next:Function){
        console.log("request body ",request.body)
        const data=request.body;
        if (data) {
            ProductService.create(request.body)
            .then((data:Product)=>{
                console.log(data);
                response.json(data)
            })
            .catch((error:any)=>{
                next(error)
            })
        } else {
            next("invalid input")
        }
            
    }
    static findOne(request:Request,response:Response,next:Function){
        console.log("request body ",request.body)
        const data=request.body;
        if (data) {
            ProductService.findOne(request.body)
            .then((data:Product)=>{
                console.log(data);
                response.json(data)
            })
            .catch((error:any)=>{
                next(error)
            })
        } else {
            next("invalid input")
        }
            
    }
    static findMany(request:Request,response:Response,next:Function){
        ProductService.findMany(request.body)
        .then((data:Product[])=>{
            console.log(data);
            response.json(data)
        })
        .catch((error:any)=>{
            next(error)
        })
    }
    static update(request:Request,response:Response,next:Function){
        console.log("Request Body ",request.body);
        const data=request.body;
        if (data) {
            ProductService.update(request.params.id,data)
            .then((data)=>{
                response.json(data);
            })
            .catch((err)=>{
                next(err);
            })
        }
        else{
            next("Invalid input");
        }
    }
    static delete(request:Request,response:Response,next:Function){
        console.log("Request Body ",request.body);
        const data=request.body.id;
        if (data) {
            ProductService.delete(request.body.id)
            .then((data)=>{
                response.json(data);
            })
            .catch((err)=>{
                next(err);
            })
        }
        else{
            next("Invalid input");
        }
    }
}