const express=require("express");
const app=express();
const bodyparser=require("body-parser");
const mongose=require("mongoose");
const { genToken } = require("./utility");

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}));

const connectDB=async()=>{
return new Promise((res,rej)=>{
mongose.connect("mongodb+srv://alokraj:alok123@cluster0.6x7sl.mongodb.net/?retryWrites=true&w=majority",function(error){
    if (error){
        rej(error)

    }
    else{
        res({meassage:"db connected"});
    }
})
})
}
const main=async()=>{
    console.log(await connectDB());
app.get("/",(req,res)=>{
    res.send({meassage:"welcome to server side application"})
})

app.post("/api/v1/login",function(req,res){
    try{
    const {name,email,mobileNumber}=request.body;
    if(!name || !email || !mobileNumber){
        const error= new Error("please fill all the filled");
        error.statusCode=400
        throw error
    }
    res.send({message:"login succesfully"})
}
    catch(e){
        res.status(e.statusCode ||500).send({message:e.error}||{message:"internal server error"})
    }
});
app.listen(5000,function(){
    console.log("sever started on port 5000")
})
}
main()