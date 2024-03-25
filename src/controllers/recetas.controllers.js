import Receta from '../database/models/receta.js'

export const listarRecetas = async(req, res)=>{
    try {
        const recetas = await Receta.find()
        res.status(200).json(recetas)
    } catch (error) {
        console.log(error)
        res.status(500).json({mensaje: 'Error al buscar las recetas'})
    }
}
