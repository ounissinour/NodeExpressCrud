
const express=require("express")// Importation de la bibliothèque Express
const mongoose=require("mongoose");// Importation de Mongoose pour la gestion des bases de données MongoDB
require('dotenv').config();
const bodyParser = require('body-parser');
const Etudiant =require('./modele/etudiants.js');// Importation du modèle d'étudiant


const app=express();// Création d'une instance d'Express


app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Connexion à la base de données MongoDB
const mongoURI = process.env.MONGO_URI; 

mongoose.connect(mongoURI) 
.then(() => {
    console.log("Successfully connected to MongoDB");
})
.catch(err => {
    console.error("Error connecting to MongoDB", err);
});

// Route pour récupérer tous les étudiants
app.get("/etudiants", async (req, res) => {
    try {
        const etudiants = await Etudiant.find({});
        res.send(etudiants);
    } catch (err) {
        console.log(err);
        res.status(500).send("Erreur du serveur");
    }
});
 
app.post("/ajouter_etudiant",async (req,res)=>{
    
    try{
        let new_etudiant= new Etudiant({
            cin:req.body.cin,
            nom:req.body.nom,
            prenom:req.body.prenom,
            email:req.body.email
        });

    await new_etudiant.save();
    res.send("sauvegarde effectué avec succées!");
    }catch(err){
        console.log(err);
    }
    
});

app.delete("/delete/:id", async (req, res) => {
    try {
        // Utilisation de findByIdAndDelete pour supprimer un document par son ID
        const result = await Etudiant.findByIdAndDelete(req.params.id);

        if (result) {
         
            res.status(200).send("Étudiant supprimé avec succès !");
        } else {
           
            res.status(404).send("Étudiant non trouvé !");
        }
    } catch (err) {
        console.error(err);
    }
});

app.put("/maj/:id", async (req, res) => {
    try {
        await Etudiant.findOneAndUpdate(
            { _id: req.params.id },
            { email: req.body.email }
        );
        res.send("Mise à jour effectuée avec succès !");
    } catch (err) {
        res.status(500).send(err);
    }
});




// Démarrage du serveur
app.listen(5000,()=>console.log("serveur en marche")) // Définir le port sur 5000

