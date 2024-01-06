import { Order } from "../../models/carts/Orders";
import { ProductModel,Product } from "../../models/product/Product";
import { Document } from "mongoose";
export default class OrderDal{
    /**
     * 
     * @param product_id 
     * @param user_id 
     * @returns 
     */
    static create(
        name: String,
        price:Number ,
        category_id: String,
        seller_id:String
        ):Promise<Product>{
        return new Promise((resolve,reject)=>{
            ProductModel.create({
                id:"",
                name:name,
                price:price,
                category_id:category_id,
                seller_id: seller_id,
            })
          .then((data:Document)=>{  
            const  product=new Product(
                data.get("id"),data.get("name"),data.get("price")
                ,data.get("category_id"),data.get("seller_id")
            )
            resolve(product);
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
    static findOne(query:any,includes:any,order:any):Promise<Product>{
        return new Promise((resolve,reject) =>{
            ProductModel.findOne(query)
            .exec()
            .then(data=>{
                resolve(data as Product)
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
            ProductModel.find(query)
            .exec()
            .then(data=>{
                resolve(data as Product[])
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
            ProductModel.find(query)
            .skip(skip)
            .limit(limit)
            .exec()
            .then(data=>{
                resolve(data as Product[])
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
            ProductModel.countDocuments(query)
            .exec()
            .then((data)=>{
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
            ProductModel.findOneAndUpdate({id:id},query,{new:true})
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
            ProductModel.findByIdAndDelete(id)
            .then((data)=>{
                resolve(1);
            })
            .catch((err)=>{
                reject(err);
            })
        })
    }
    
}