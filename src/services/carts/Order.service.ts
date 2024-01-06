import OrderDal from '../../dals/carts/Order.dal'
import { Order } from '../../models/carts/Orders';

export class OrderService{
    static create(query:any):Promise<Order>{
        return new Promise((resolve,reject)=>{
            OrderDal.create(query.product_id,query.buyer_id,
                query.seller_id,false)
            .then((order:Order)=>{
                resolve(order)
            })
            .catch((error:Error)=>{
                reject(error);
            })
        })
    }
    static findOne(query:any):Promise<Order>{
        return new Promise((resolve,reject)=>{
            OrderDal.findOne(query,null,null)
            .then((order:Order)=>{
                resolve(order)
            })
            .catch((error:Error)=>{
                reject(error);
            })
        })
    }
    static findMany(query:any):Promise<Order[]>{
        return new Promise((resolve,reject)=>{
            OrderDal.findMany(query,null,null)
            .then((order:Order[])=>{
                resolve(order)
            })
            .catch((error:Error)=>{
                reject(error);
            })
        })
    }
    static update(id:string,query:any):Promise<Order>{
        return new Promise((resolve,reject)=>{
            OrderDal.update(id,query)
            .then((order:Order)=>{
                resolve(order)
            })
            .catch((error:Error)=>{
                reject(error);
            })
        })
    }
    static delete(id:string):Promise<Order>{
        return new Promise((resolve,reject)=>{
            OrderDal.delete(id)
            .then((order:Order)=>{
                resolve(order)
            })
            .catch((error:Error)=>{
                reject(error);
            })
        })
    }
}