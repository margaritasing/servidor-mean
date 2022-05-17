const mongoose = require("mongoose")// va a almacenar los datos de los usuarios"

const usersSchema = new mongoose.Schema({

     imageUser:{ type: String},
     firstname:{type:String, require:true},
     lastname:{type:String, require:true},
     email:{type:String, require:true},
     password:{type:String, require:true},
     uniqueText:{ type: String, require: true},
     emailVerificado:{type:Boolean,require:true},
     connected: {type: Boolean, require: true},
     google:{type: Boolean, require: true},
     from:{ type: String, require: true},
     
})
const User = mongoose.model("users",usersSchema)

module.exports = User;