import CategoryDal from "../../dals/product/Category.dal";
import { Category } from '../../models/product/Category';

export class CategoryService{
    static create(query:any):Promise<Category>{
        return new Promise((resolve,reject)=>{
            CategoryDal.create(query.name)
            .then((category:Category)=>{
                resolve(category)
            })
            .catch((error:Error)=>{
                reject(error);
            })
        })
    }
    static findOne(query:any):Promise<Category>{
        return new Promise((resolve,reject)=>{
            CategoryDal.findOne(query,null,null)
            .then((category:Category)=>{
                resolve(category)
            })
            .catch((error:Error)=>{
                reject(error);
            })
        })
    }
    static findMany(query:any):Promise<Category[]>{
        return new Promise((resolve,reject)=>{
            CategoryDal.findMany(query,null,null)
            .then((category:Category[])=>{
                resolve(category)
            })
            .catch((error:Error)=>{
                reject(error);
            })
        })
    }
    static update(id:string,query:any):Promise<Category>{
        return new Promise((resolve,reject)=>{
            CategoryDal.update(id,query)
            .then((category:Category)=>{
                resolve(category)
            })
            .catch((error:Error)=>{
                reject(error);
            })
        })
    }
    static delete(id:string):Promise<Category>{
        return new Promise((resolve,reject)=>{
            CategoryDal.delete(id)
            .then((category:Category)=>{
                resolve(category)
            })
            .catch((error:Error)=>{
                reject(error);
            })
        })
    }
}