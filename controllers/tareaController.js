const Tarea = require("../models/tarea.js")

const createTarea =  async (req, res) =>{

    const {nombre, descripcion} = req.body

    const nuevaTarea = new Tarea({
        nombre,
        descripcion
    })

    await nuevaTarea.save()    


    res.status(200).json({ok: true, msg:"tarea creada"})

}


module.exports = {
    createTarea,
}