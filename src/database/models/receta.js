import mongoose, {Schema} from "mongoose";

const recetaSchema = new Schema({
    nombreReceta:{
        type: String,
        required: true,
        minLength: 3,
        maxLength:50,
        unique:true
    },
    tiempo:{
        type:String,
        minLength:2,
        maxLength:150,
    },
  
    imagen:{
        type:String,
        required:true,
        validate: {
            validator: (valor)=>{
                return /\.(jpg|jpeg|png|gif)$/i.test(valor)
            },
            message: dato => `${dato.value} no es una URL de imagen valida`
        }
    },
    categoria:{
        type:String,
        required:true,
        enum: ['ensaladas', 'pastas', 'postres']
    },
    descripcion:{
        type:String,
        required:true,
        minLength: 5,
        maxLength:50,
    

},
preparacion:{
    type:String,
    required:true,
    minLength: 3,
    maxLength:1000,
}
})

const Receta = mongoose.model('receta', recetaSchema)

export default Receta