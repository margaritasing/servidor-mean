const bcryptjs = require("bcryptjs");

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
       

       await nuevoUsuario.save()

       res.json({
           ok: true,
           email, passwordHash, username, lastname, imageUser,
           msg: "Usuario registrado"
       })        
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