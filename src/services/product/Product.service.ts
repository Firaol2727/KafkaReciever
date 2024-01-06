import ProductDal from '../../dals/product/Product.dal';
import { Product } from '../../models/product/Product';

export class ProductService{
    static create(query:any):Promise<Product>{
        return new Promise((resolve,reject)=>{
            ProductDal.create(
                query.name,
                query.price,
                query.category_id,
                query.seller_id
                )
            .then((product:Product)=>{
                resolve(product)
            })
            .catch((error:Error)=>{
                reject(error);
            })
        })
    }
    static findOne(query:any):Promise<Product>{
        return new Promise((resolve,reject)=>{
            ProductDal.findOne(query,null,null)
            .then((product:Product)=>{
                resolve(product)
            })
            .catch((error:Error)=>{
                reject(error);
            })
        })
    }
    static findMany(query:any):Promise<Product[]>{
        return new Promise((resolve,reject)=>{
            ProductDal.findMany(query,null,null)
            .then((products:Product[])=>{
                resolve(products)
            })
            .catch((error:Error)=>{
                reject(error);
            })
        })
    }
    static update(id:string,query:any):Promise<Product>{
        return new Promise((resolve,reject)=>{
            ProductDal.update(id,query)
            .then((product:Product)=>{
                resolve(product)
            })
            .catch((error:Error)=>{
                reject(error);
            })
        })
    }
    static delete(id:string):Promise<Product>{
        return new Promise((resolve,reject)=>{
            ProductDal.delete(id)
            .then((product:Product)=>{
                resolve(product)
            })
            .catch((error:Error)=>{
                reject(error);
            })
        })
    }
}