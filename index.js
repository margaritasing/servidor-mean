const express = require("express");
const app = express();


app.use("*", express.static(__dirname + "/public")) //para que no exista problema con el pack         


app.get("/", (req, res) => {
    res.send("acceso jodido")
})


app.listen(3000, () => { 
    console.log("Aplicacion corriendo en el puerto 3000");
})