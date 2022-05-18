const Tarea = require("../models/tarea.js")

const createTarea =  async (req, res) =>{

    const {nombre, descripcion} = req.body
    const id = req.uid

    const nuevaTarea = new Tarea({
        nombre,
        descripcion,
        creator:id
    })

    await nuevaTarea.save()    
    res.status(200).json({ok: true, msg:"tarea creada", nuevaTarea})
}


module.exports = {
    createTarea,
}