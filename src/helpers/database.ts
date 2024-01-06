import { CartModel,Cart } from '../models/carts/Carts';
import { OrderModel } from '../models/carts/Orders';
import { ProductModel } from '../models/product/Product';
import { CategoryModel } from '../models/product/Category';
import mongoose,{Document} from 'mongoose';
import config from 'config';
import CartDal  from '../dals/carts/Cart.dal';
export  const InitializeDatabase=async()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/Products')
    .then(()=>{
      console.log("Connection was successful ") 
       
    }).catch((error)=>{
        console.log("error occured "+error)
    })
}
export {CartModel,OrderModel,ProductModel,CategoryModel
};