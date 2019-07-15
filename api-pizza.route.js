const express=require('express');
const app=express();
const apiPizzaRouter=express.Router();
let Pizza=require('./pizza');
//get all pizza
apiPizzaRouter.route('/allPizza').get((req,resp)=>{
    Pizza.find((err,data)=>{
        if(err){
            resp.send("Failure");
        }
        console.log("fetching");
        resp.send(data);
    });
});
//get Pizza by pizzaId
apiPizzaRouter.route('/:pizzaId').get((req,resp)=>{
    let p_pizzaId=req.params.pizzaId;
   Pizza.find({pizzaId:p_pizzaId},(err,data)=>{
        if(err) resp.send("Failed to load data for :"+p_pizzaId);
        resp.send(data);
    });
});
//get Pizza by pizzaName
apiPizzaRouter.route('/pname/:pizzaName').get((req,resp)=>{
    let p_pizzaName=req.params.pizzaName;
    Pizza.find({pizzaName:p_pizzaName},(err,data)=>{
        if(err) resp.send("Failed to load data for :"+p_pizzaName);
        resp.send(data);
    });
    //resp.send("<h1>Called getby empName</h1>");
});
//add product
apiPizzaRouter.route('/addPizza').post((req,resp)=>{
    let body_pizza=new Pizza(req.body);
    body_pizza.save().then(
        ()=>resp.send("New Pizza added to database"),
        (err)=>resp.send("Failure while adding pizza details")
);
    
});
   
//delete product
apiPizzaRouter.route('/delete/:pizzaId').delete((req,resp)=>{;
    let p_pizzaId=req.params.pizzaId;
    Pizza.findOneAndDelete({pizzaId:p_pizzaId},(err,data)=>{
        if(err) resp.send("No records found");
        resp.send("deleted records");
    });
});
//update product
apiPizzaRouter.route('/update/:pizzaId/:price').put((req,resp)=>{
    let p_pizzaId=req.params.pizzaId;
    let p_price=req.params.price;
   Pizza.findOneAndUpdate({pizzaId:p_pizzaId},{price:p_price},(err,data)=>{
    if(err) resp.send("Failed to update");
    resp.send("update records for" +p_pizzaId+ " as " +p_price);
});
});
module.exports=apiPizzaRouter;
