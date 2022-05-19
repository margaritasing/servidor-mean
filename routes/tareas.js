const {Router} = require("express");
const { createTarea, readTarea, updateTarea, deleteTarea} = require("../controllers/tareaController");
const verifyToken = require("../middlewares/verifyToken")
const { check } = require("express-validator");
const validationErrors = require("../middlewares/validationErrors");

const taskRouter = Router();


taskRouter.post("/create", [check("nombre", "Nombre de la tarea es obligado").not().isEmpty(), verifyToken],validationErrors, createTarea);

taskRouter.get("/read", [verifyToken], readTarea);

taskRouter.put("/update/:id", [check("nombre", "Nombre de la tarea es obligado").not().isEmpty(), verifyToken], validationErrors, updateTarea);

taskRouter.delete("/delete/:id", [verifyToken], deleteTarea);




module.exports = taskRouter;