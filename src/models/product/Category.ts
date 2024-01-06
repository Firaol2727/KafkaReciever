import {Schema,model,connect, StringSchemaDefinition} from "mongoose";
import { v4 as uuidv4 } from 'uuid';
export class Category{
    id:string;
    name:string;
    constructor(id:string,name:string){
        this.id= id;
        this.name = name;
    }
}
const CategorySchema=new Schema<Category>({
    id:{
        type:String,
        unique:true,
        set:function () {
            return uuidv4();
        }
    },
    name:{
        type:String,
        required:true
    },

})
export const CategoryModel =model<Category>("Category",CategorySchema);
