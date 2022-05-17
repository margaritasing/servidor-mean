const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken")
const { validationResult } = require("express-validator")

const usuarioModel = require("../models/User.js")


const registerUsuario = async (req, res) =>{

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(501).json({
            ok: false,
            errors: errors.mapped()
        })        
    }

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

};

const loginUsuario = async (req, res) =>{
    
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(501).json({
            ok: false,
            errors: errors.mapped()
        })        
    }

    const { email, password } = req.body;

    try {
        let usuario = await usuarioModel.findOne({ email })

       if (!usuario) {
           return res.status(401).json({ msg: "Usuario o contraseña incorrecto"})           
       }

       const contraseñaValida = bcryptjs.compareSync(password, usuario.password)

       if (!contraseñaValida) {
        return res.status(401).json({ msg: "Usuario o contraseña incorrecto"})           
    }

    const payload = {
        id: usuario.id
    }    
    jwt.sign(payload, process.env.SECRETA_PALABRA, {expiresIn:60*60*24}, (error, token)=>{
        res.json({
            ok: true,
            id: usuario.id,             
            username: usuario.username, 
            lastname: usuario.lastname,              
            msg: "Inicio de sección",
            token
        });        
    });      
        
    } catch (error) {
        res.json({
            ok: false,            
            msg: "Error al loguearse "
        })       
    }

}


module.exports = {   
    registerUsuario,
    loginUsuario
}