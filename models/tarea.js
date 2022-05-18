const mongoose = require("mongoose")// va a almacenar los datos de los usuarios"

const tareaSchema = new mongoose.Schema({ 

     nombre:{
         type:String, 
         require:true,
         trim:true},
    descripcion:{
            type:String, 
            require:true,
            trim:true},
    creator:{
            type: mongoose.SchemaTypes.ObjectId, 
            require:true,
            ref: "User"},
    createAt:{
             type:Date, 
             default: Date.now()
             },        
     
}

)
const Tarea = mongoose.model("tarea",tareaSchema)

module.exports = Tarea;