const {Router} = require("express");
const { createTarea } = require("../controllers/tareaController");
const verifyToken = require("../middlewares/verifyToken")

const taskRouter = Router();


taskRouter.post("/create",[verifyToken],  createTarea)



module.exports = taskRouter;