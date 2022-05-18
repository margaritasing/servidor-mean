const {Router} = require("express");
const { createTarea, readTarea} = require("../controllers/tareaController");
const verifyToken = require("../middlewares/verifyToken")

const taskRouter = Router();


taskRouter.post("/create",[verifyToken],  createTarea);

taskRouter.get("/read", [verifyToken], readTarea);




module.exports = taskRouter;