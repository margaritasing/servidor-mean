require("dotenv").config()
const cors = require("cors")

const express = require("express");
const authRouter = require("./routes/auth.js");
const taskRouter = require("./routes/tareas.js");

const app = express();
app.use(express.json()); // se utiliza para procesar json
app.use(cors())

require("./config/db.js")



app.use("/", express.static(__dirname + "/public")) //para que no exista problema con el pack         
app.use("/auth", authRouter);
app.use("/task", taskRouter);


app.listen(process.env.PORT, () => { 
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
})