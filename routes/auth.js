const { Router } = require("express");
const { check } = require("express-validator");
const { registerUsuario, loginUsuario } = require("../controllers/authController");

const authRouter = Router()



authRouter.post("/register", [check("email","Email es requerido").isEmail(),
    check("password", "Password tiene que ser 6 caracteres como minimo").isLength({min:6}), check("username", "El nombre del usuario es requerido").not().isEmpty()],registerUsuario)

authRouter.post("/login", [check("email","Email es requerido").isEmail(),
check("password", "Password es requerido").isLength({min:6}), ], loginUsuario)




module.exports = authRouter;