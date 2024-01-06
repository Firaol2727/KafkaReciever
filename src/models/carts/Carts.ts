import { HydratedDocument, Model, QueryWithHelpers, Schema, model, connect } from 'mongoose';
import { v4 as uuidv4 } from "uuid";
export class Cart {
    public id:string;
    public product_id:string;
    public buyer_id:string;
    constructor(id:string,product_id:string,buyer_id:string){
        this.id=id;
        this.product_id=product_id;
        this.buyer_id=buyer_id;
    }

}
export const CartsSchema=new Schema<Cart>({
    id:{
        type:String,
        unique:true,
        required:true,
        set:function () {
            return uuidv4();
        }
    },
    product_id:{
        type:String,
        required:true,
        ref:"Product"
    },
    buyer_id:{
        type:String,
        required:true,
        ref:"Buyer"
    }
})

export const CartModel =model<Cart>("Carts",CartsSchema);
