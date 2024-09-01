const mongoose=require('mongoose')


// Schéma de la base : description des champs de notre base
const etudiantSchema =mongoose.Schema({
 cin:{
    type:Number,
    required:true,
 },
 nom:{
    type:String,
    required:true,
 },
 prenom:{
    type:String,
    required:true,
 },
 email:{
    type:String,
    required:false,
}
});


// Exportation du schéma sous la forme d'un modèle
module.exports =Etudiant = mongoose.model("etudiants", etudiantSchema);