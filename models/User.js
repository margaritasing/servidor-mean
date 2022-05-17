const mongoose = require("mongoose")// va a almacenar los datos de los usuarios"

const usersSchema = new mongoose.Schema({

     imageUser:{ type: String},
     username:{type:String, require:true},
     lastname:{type:String, require:true},
     email:{type:String, require:true, unique:true},
     password:{type:String, require:true},       
     
},

{ timestamps: true }
)
const User = mongoose.model("users",usersSchema)

module.exports = User;