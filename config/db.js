 
const conexionDb = require("mongoose");

conexionDb.connect(process.env.MONGO_URI,
    {
        useUnifiedTopology:true,
        useNewUrlParser:true
    })

    .then(()=> console.log("Database Conectada"))
    .catch((error => console.error(error)))




module.exports = conexionDb;