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

const readTarea = async (req, res) =>{
    const id = req.uid

    try {
        const tareas = await Tarea.find({creator:id}).sort({createAt:-1})
        res.json({
            ok:true, tareas
        })
        
    } catch (error) {
        return res.status(404).json({ok: false, msg:"Tareas no encontradas"})
        
    }

}


module.exports = {
    createTarea,
    readTarea
}