import express, { Router ,Request,Response} from "express";
import { CategoryService } from "../../services/product/Category.service";
import { Category } from "../../models/product/Category";

export default class OrderController{
    static create(request:Request,response:Response,next:Function){
        console.log("request body ",request.body)
        const data=request.body;
        if (data) {
            CategoryService.create(request.body)
            .then((data:Category)=>{
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
            CategoryService.findOne(request.body)
            .then((data:Category)=>{
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
        CategoryService.findMany(request.body)
        .then((data:Category[])=>{
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
            CategoryService.update(request.params.id,data)
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
            CategoryService.delete(request.body.id)
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