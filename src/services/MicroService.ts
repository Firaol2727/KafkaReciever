import { CartService } from "./carts/Cart.service"; 
import {OrderService} from "./carts/Order.service";
import {ProductService} from "./product/Product.service";
export class MicroService{
    static chooseActivity(message:any):Promise<any>{
        console.log("Message ",message)
        let {casse,body}=message;
        return new Promise ((resolve,reject)=>{
           switch (casse) {
            case "cart":
                console.log("Cart create running ")
                CartService.create(body)
                .then((data:any)=>{
                    resolve(data) ;
                })
                .catch((error:Error)=>{
                    reject(error) ;
                })
                break;
            case "product":
                console.log("Product create running ")
                ProductService.create(body)
                .then((data:any)=>{
                    resolve(data) ;
                })
                .catch((error:Error)=>{
                    reject(error) ;
                })
                break;
            default:
                break;
           }
        })
        
    }
}