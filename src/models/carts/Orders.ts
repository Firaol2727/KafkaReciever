import {Schema,model,connect} from "mongoose";
import { v4 as uuidv4 } from 'uuid';
export class Order{
    public id:string; 
    public product_id:string;
    public buyer_id:string;
    public seller_id:string;
    public paid:boolean;
    constructor(id:string,product_id:string,buyer_id:string,seller_id:string,paid:boolean){
        this.id=id;
        this.product_id=product_id;
        this.buyer_id=buyer_id;
        this.seller_id=seller_id;
        this.paid=paid;
    }
}
const OrdersSchema=new Schema<Order>({
    id:{
        type:String,
        unique:true,
        set:function () {
            return uuidv4();
        }
    },
    product_id:{
        type:String,
        required:true
    },
    buyer_id:{
        type:String,
        required:true,
        ref:"Buyer"
    },
    seller_id:{
        type:String,
        required:true,
        ref:"Seller"
    },
    paid:{
        type:Boolean,
        required:false
    }

})
export const OrderModel=model<Order>("Orders",OrdersSchema);
