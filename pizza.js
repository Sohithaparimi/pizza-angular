//Step1: include your mongoose
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
//Step2: Create a collection using schema
//mongoose allows
//new schema ({attributes in document},{name of collection})
let Pizza=new Schema({
    pizzaId:{type:Number},
    pizzaName:{type:String},
    price:{type:Number}
},{
    collection:'pizza'
});
//create table product
//to access your document created in mongo
module.exports=mongoose.model("Pizza",Pizza);
