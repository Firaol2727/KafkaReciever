import express, { Router ,Request,Response} from "express";
import { OrderService } from "../../services/carts/Order.service";
import { Order } from "../../models/carts/Orders";

export default class OrderController{
    static create(request:Request,response:Response,next:Function){
        console.log("request body ",request.body)
        const data=request.body;
        if (data) {
            OrderService.create(request.body)
            .then((data:Order)=>{
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
            OrderService.findOne(request.body)
            .then((data:Order)=>{
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
        OrderService.findMany(request.body)
        .then((data:Order[])=>{
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
            OrderService.update(request.params.id,data)
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
            OrderService.delete(request.body.id)
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