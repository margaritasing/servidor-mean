require("dotenv").config()
const express = require("express");
const authRouter = require("./routes/auth.js");

const app = express();
require("./config/db.js")

app.use(express.json()); // se utiliza para procesar json


app.use("/", express.static(__dirname + "/public")) //para que no exista problema con el pack         
app.use("/auth", authRouter);


app.listen(process.env.PORT, () => { 
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
})