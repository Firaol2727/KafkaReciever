import { Order,OrderModel } from "../../models/carts/Orders";
import { Document } from "mongoose";
export default class OrderDal{
    /**
     * 
     * @param product_id 
     * @param user_id 
     * @returns 
     */
    static create(
        product_id:string,
        buyer_id:string,
        seller_id:string,
        paid:boolean,
        ):Promise<Order>{
        return new Promise((resolve,reject)=>{
            OrderModel.create({
                id:"",
                product_id:product_id,
                buyer_id:buyer_id,
                seller_id:seller_id,
                paid:paid
            })
          .then((data:Document)=>{  
            const  order=new Order(
                data.get("id"),data.get("product_id"),data.get("buyer_id")
                ,data.get("seller_id"),data.get("paid")
            )
            resolve(order);
          })
          .catch((error:Error)=>{
            reject(error);
          }) 
        })
          
    };
    /**
     * 
     * @param query 
     * @param includes 
     * @param order 
     * @returns 
     */
    static findOne(query:any,includes:any,order:any):Promise<Order>{
        return new Promise((resolve,reject) =>{
            OrderModel.findOne(query)
            .exec()
            .then(data=>{
                resolve(data as Order)
            })
            .catch((err)=>{
                reject(err)
            })
        } );
    };
    /**
     * 
     * @param query 
     * @param includes 
     * @param order 
     * @returns 
     */
    static findMany(query: any, includes: any, order: any): Promise<any[]> {
        return new Promise((resolve,reject) =>{
            OrderModel.find(query)
            .exec()
            .then(data=>{
                resolve(data as Order[])
            })
            .catch((err)=>{
                reject(err)
            })
        } );
    }
    /**
     * 
     * @param query 
     * @param page 
     * @param limit 
     * @param includes 
     * @param order 
     * @returns 
     */
    static findManyPaginate(query: any, page: number, limit: number, includes: any, order: any): Promise<any[]> {
        const skip = (page - 1) * limit;
        return new Promise((resolve,reject) =>{
            OrderModel.find(query)
            .skip(skip)
            .limit(limit)
            .exec()
            .then(data=>{
                resolve(data as Order[])
            })
            .catch((err)=>{
                reject(err)
            })
        } );
    }
    /**
     * 
     * @param query 
     * @returns 
     */
    static count(query: any): Promise<number> {
        return new Promise((resolve,reject) =>{
            OrderModel.countDocuments(query)
            .exec()
            .then(data=>{
                resolve(data)
            })
            .catch((err)=>{
                reject(err)
            })
        } );
    }
    /**
     * 
     * @param query 
     * @param includes 
     * @param order 
     * @returns 
     */
    static update(id:String,query: any): Promise<any> {
        return new Promise((resolve,reject) =>{
            OrderModel.findOneAndUpdate({id:id},query,{new:true})
            .exec()
            .then(data=>{
                resolve(data)
            })
            .catch((err)=>{
                reject(err)
            })
        } );
    }
    /**
     * 
     * @param query 
     * @param includes 
     * @param order 
     */
    static delete(id:string): Promise<any> {
        return new Promise((resolve,reject)=>{
            OrderModel.findByIdAndDelete(id)
            .then((data)=>{
                resolve(1);
            })
            .catch((err)=>{
                reject(err);
            })
        })
    }
    
}