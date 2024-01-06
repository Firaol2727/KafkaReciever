import CartDal from '../../dals/carts/Cart.dal'
import { Cart } from '../../models/carts/Carts';

export class CartService{
    static create(query:any):Promise<Cart>{
        return new Promise((resolve,reject)=>{
            CartDal.create(query.product_id,query.user_id)
            .then((cart:Cart)=>{
                resolve(cart)
            })
            .catch((error:Error)=>{
                reject(error);
            })
        })
    }
    static findOne(query:any):Promise<Cart>{
        return new Promise((resolve,reject)=>{
            CartDal.findOne(query,null,null)
            .then((cart:Cart)=>{
                resolve(cart)
            })
            .catch((error:Error)=>{
                reject(error);
            })
        })
    }
    static findMany(query:any):Promise<Cart[]>{
        return new Promise((resolve,reject)=>{
            CartDal.findMany(query,null,null)
            .then((cart:Cart[])=>{
                resolve(cart)
            })
            .catch((error:Error)=>{
                reject(error);
            })
        })
    }
    static update(id:string,query:any):Promise<Cart>{
        return new Promise((resolve,reject)=>{
            CartDal.update(id,query)
            .then((cart:Cart)=>{
                resolve(cart)
            })
            .catch((error:Error)=>{
                reject(error);
            })
        })
    }
    static delete(id:string):Promise<Cart>{
        return new Promise((resolve,reject)=>{
            CartDal.delete(id)
            .then((cart:Cart)=>{
                resolve(cart)
            })
            .catch((error:Error)=>{
                reject(error);
            })
        })
    }
}