import {Schema,model,connect} from "mongoose";
import { v4 as uuidv4 } from 'uuid';
export class Product{
    id:string;
    name:string;
    price:number;
    category:string;
    seller_id:string;
    constructor(id:string,name:string,price:number,category:string,seller_id:string){
        this.id=id;
        this.name=name;
        this.price=price;
        this.category=category;
        this.seller_id=seller_id;
    }
}
const ProductSchema=new Schema<Product>({
    id:{
        type:String,
        unique:true,
        set:function () {
            return uuidv4();
        },
        primary: true,
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:false
    },
    seller_id:{
        type:String,
        required:false
    }

})
export const ProductModel=model<Product>("Product",ProductSchema);
