//step1:include all modules
const express=require('express');
const cors=require('cors');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const dbconfig=require('./DB');
const path=require('path');
const apiProRoute=require('./server/api-pizza.route');
const app=express();
//step2:configuration of database
mongoose.Promise=global.Promise;
mongoose.connect(dbconfig.DB,{useNewUrlParser:true}).then(
    ()=>console.log("Database Connected"),
    (err)=>console.log("failed to connect database")
);

//step 3:handling app static resource and api call
app.use(bodyparser.json());//json handling
app.use(cors());
//path.json(_dirname.'distmy-app04);
//public:folder which contains all static resources
//.html, .jpg, .css, .js}we will keep to one folder called public
app.use(express.static(path.join(__dirname,'public')));
app.get('/',(req,resp)=>{
    //resp.send("Welcome to express")
    resp.sendFile("index.html");
});
//to call apiproduct route
app.use('/pizza',apiProRoute);
//step 4:starting server
app.listen(4000,()=>{console.log("Server listening at 4000")});