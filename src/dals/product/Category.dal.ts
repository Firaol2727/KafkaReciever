import { PageAdapter } from "../../helpers/PageAdapter";
import { CartModel } from "../../helpers/database";
import { Order } from "../../models/carts/Orders";
import { CategoryModel,Category } from "../../models/product/Category";
import { Document } from "mongoose";
export default class CategoryDal{
    /**
     * 
     * @param product_id 
     * @param user_id 
     * @returns 
     */
    static create(
        name: String,
        ):Promise<Category>{
        return new Promise((resolve,reject)=>{
            CartModel.create({
                id:"",
                name:name,
            })
          .then((data:Document)=>{  
            const  category=new Category(
                data.get("id"),data.get("name")
            )
            resolve(category);
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
    static findOne(query:any,includes:any,order:any):Promise<Category>{
        return new Promise((resolve,reject) =>{
            CategoryModel.findOne(query)
            .exec()
            .then(data=>{
                resolve(data as Category)
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
    static findMany(query: any, includes: any, order: any): Promise<Category[]> {
        return new Promise((resolve,reject) =>{
            CategoryModel.find(query)
            .exec()
            .then(data=>{
                resolve(data as Category[])
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
    static findManyPaginate(query: any, page: number, limit: number, includes: any, order: any): Promise<PageAdapter> {
        const skip = (page - 1) * limit;
        return new Promise((resolve,reject) =>{
            CategoryModel.find(query)
            .skip(skip)
            .limit(limit)
            .exec()
            .then(data=>{
                resolve({
                    page:page,
                    limit:limit,
                    data:data as Category[]
                })
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
            CategoryModel.countDocuments(query)
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
            CategoryModel.findOneAndUpdate({id:id},query,{new:true})
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
            CategoryModel.findByIdAndDelete(id)
            .then((data)=>{
                resolve(1);
            })
            .catch((err)=>{
                reject(err);
            })
        })
    }
    
}