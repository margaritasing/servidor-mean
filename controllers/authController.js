const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken")

const usuarioModel = require("../models/User.js")


const registerUsuario = async (req, res) =>{
    const { email, password, username, lastname, imageUser } = req.body;

    try {
       let usuarioExiste = await usuarioModel.findOne({ email })
       if (usuarioExiste) {
           return res.status(501).json({success:false, msg: "El correo ya existe"})           
       }
       const nuevoUsuario = new usuarioModel({ email, password, username, lastname, imageUser })
       //implementacion de el encriptado de la contraseña 
       const passwordHash = bcryptjs.hashSync(password, 10);
       nuevoUsuario.password = passwordHash;
       
       await nuevoUsuario.save();

       // le paso el jwt para generar el token
       const payload = {
           id: nuevoUsuario.id
       }

       
       jwt.sign(payload, process.env.SECRETA_PALABRA, {expiresIn:60*60*24}, (error, token)=>{
           res.json({
               ok: true,
               id: nuevoUsuario.id,             
               username, 
               lastname,              
               msg: "Usuario registrado",
               token
           });        
       });

    } catch (error) {
        res.json({
            ok: false,            
            msg: "Error al registrar "
        })       
    }

}





module.exports = {   
    registerUsuario
}