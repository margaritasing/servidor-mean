const { Router } = require("express");

const authRouter = Router()

authRouter.get("/login", (req, res) => {
    res.send('hola')
});







module.exports = authRouter;