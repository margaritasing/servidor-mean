const { Router } = require("express");
const { registerUsuario, loginUsuario } = require("../controllers/authController");

const authRouter = Router()



authRouter.post("/register", registerUsuario),
authRouter.post("/login", loginUsuario)








module.exports = authRouter;