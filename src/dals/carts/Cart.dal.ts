import { Cart,CartModel } from "../../models/carts/Carts";
import { Document } from "mongoose";
export default class CartDal{
    static create(
        product_id:string,
        buyer_id:string
        ):Promise<Cart>{
        return new Promise((resolve,reject)=>{
            CartModel.create({
               id:"",
               product_id:product_id,
               buyer_id:buyer_id
            })
          .then((data:Document)=>{  
            const cart=new Cart(data.get("_id"),data.get("product_id"),data.get("buyer_id"));
            resolve(cart);
          })
          .catch((error:Error)=>{
            reject(error);
          }) 
        })
          
    };
    static findOne(query:any,includes:any,order:any):Promise<Cart>{
        return new Promise((resolve,reject) =>{
            CartModel.findOne(query)
            .exec()
            .then(data=>{
                resolve(data as Cart)
            })
            .catch((err)=>{
                reject(err)
            })
        } );
    };
    static findMany(query: any, includes: any, order: any): Promise<any[]> {
        return new Promise((resolve,reject) =>{
            CartModel.find(query)
            .exec()
            .then(data=>{
                resolve(data as Cart[])
            })
            .catch((err)=>{
                reject(err)
            })
        } );
    }
    static findManyPaginate(query: any, page: number, limit: number, includes: any, order: any): Promise<any[]> {
        const skip = (page - 1) * limit;
        return new Promise((resolve,reject) =>{
            CartModel.find(query)
            .skip(skip)
            .limit(limit)
            .exec()
            .then(data=>{
                resolve(data as Cart[])
            })
            .catch((err)=>{
                reject(err)
            })
        } );
    }
    static count(query: any): Promise<number> {
        return new Promise((resolve,reject) =>{
            CartModel.countDocuments(query)
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
    static update(id:String,query: any): Promise<Cart> {
        return new Promise((resolve,reject) =>{
            CartModel.findOneAndUpdate({id:id},query,{new:true})
            .exec()
            .then(data=>{
                resolve(data as Cart)
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
            CartModel.findByIdAndDelete(id)
            .then((data)=>{
                resolve(1);
            })
            .catch((err)=>{
                reject(err);
            })
        })
    }
    
}