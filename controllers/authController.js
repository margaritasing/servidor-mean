const usuarioModel = require("../models/User.js")


const registerUsuario = async (req, res) =>{
    const { email, password, username, lastname, imageUser } = req.body;

    try {
       let usuarioExiste = await usuarioModel.findOne({ email })
       if (usuarioExiste) {
           return res.status(501).json({success:false, msg: "El correo ya existe"})           
       }
       const nuevoUsuario = new usuarioModel({ email, password, username, lastname, imageUser })

       await nuevoUsuario.save()

       res.json({
           ok: true,
           email, password, username, lastname, imageUser,
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