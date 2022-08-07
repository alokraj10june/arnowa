const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    mobileNumber:{type:Number,require:true}
})
module.exports=mongoose.model("User",userSchema);