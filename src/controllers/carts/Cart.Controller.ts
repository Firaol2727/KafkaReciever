import express, { Router ,Request,Response} from "express";
import { CartService } from "../../services/carts/Cart.service";
import { Cart } from "../../models/carts/Carts";

export default class CartController{
    static create(request:Request,response:Response,next:Function){
        console.log("request body ",request.body)
        const data=request.body;
        if (data) {
            CartService.create(request.body)
            .then((data:Cart)=>{
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
            CartService.findOne(request.body)
            .then((data:Cart)=>{
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
        CartService.findMany(request.body)
        .then((data:Cart[])=>{
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
            CartService.update(request.params.id,data)
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
            CartService.delete(request.body.id)
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