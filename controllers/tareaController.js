const Tarea = require("../models/tarea.js")

const createTarea =  async (req, res) => {

    const {nombre, descripcion} = req.body
    const id = req.uid

    const nuevaTarea = new Tarea({
        nombre,
        descripcion,
        creator:id
    })
    await nuevaTarea.save()    
    res.status(200).json({ok: true, msg:"Tarea creada", nuevaTarea})
};

const readTarea = async (req, res) => {
    const id = req.uid
    try {
        const tareas = await Tarea.find({creator:id}).sort({createAt:-1})
        return res.json({
            ok:true, 
            tareas
        })        
    } catch (error) {
        return res.status(404).json({ok: false, msg:"Tarea no encontrada"})        
    }
};

const updateTarea = async (req, res) => {
     const {id} = req.params;
    const {nombre, descripcion} = req.body
    try {

        const tarea = await Tarea.findByIdAndUpdate(id,{nombre, descripcion}, {new: true})
       return res.json({
            ok:true, 
            msg:"Tarea actualizada",
            tarea
        })   
               
    } catch (error) {
        return res.status(404).json({ok: false, msg:"Tarea no actualizada"})        
    }
    

};

const deleteTarea = async (req, res) =>{
    const { id } = req.params;    

    try {
       const tarea = await Tarea.findByIdAndDelete(id);

       return res.json({
            ok:true, 
            msg:"La tarea fue eliminada",
            tarea,
        });         
    } catch (error) {
        return res.status(404).json({
            ok: false, 
            msg:"La tarea no fue borrada",
        }) 
    }
};


module.exports = {
    createTarea,
    readTarea,
    updateTarea,
    deleteTarea
}