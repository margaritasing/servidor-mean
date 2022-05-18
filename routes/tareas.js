const {Router} = require("express");
const { createTarea } = require("../controllers/tareaController");

const taskRouter = Router();


taskRouter.post("/create", createTarea)



module.exports = taskRouter;