const { Router } = require("express");
const { registerUsuario } = require("../controllers/authController");

const authRouter = Router()



authRouter.post("/register", registerUsuario)







module.exports = authRouter;