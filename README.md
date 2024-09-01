Description
Cette application Node.js est un exemple de projet CRUD utilisant Express et Mongoose pour interagir avec MongoDB. Le projet utilise également Thunder pour les tests.

Prérequis
Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

Node.js (version 16 ou supérieure)
MongoDB Atlas pour la base de données en ligne
Thunder pour les tests
Installation
Clonez le dépôt :

bash
Copier le code
git clone https://github.com/nom_utilisateur/nom_du_depot.git
cd nom_du_depot
Installez les dépendances :

bash
Copier le code
npm install
Créez un fichier .env à la racine du projet avec les informations suivantes :

php
Copier le code
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
PORT=3000
Remplacez <username>, <password>, et <dbname> par vos informations MongoDB Atlas.

Utilisation
Démarrez l'application :

bash
Copier le code
npm start
L'application sera disponible à l'adresse http://localhost:3000.

Tests
Configuration de Thunder
Assurez-vous que Thunder est installé globalement :

bash
Copier le code
npm install -g thunder
Créez un fichier de configuration Thunder pour les tests, par exemple thunder.config.js :

javascript
Copier le code
module.exports = {
  url: 'http://localhost:3000',
  tests: [
    {
      description: 'Test de la route GET /api/etudiants',
      request: {
        method: 'GET',
        url: '/api/etudiants',
      },
      expectedResponse: {
        status: 200,
        body: {
          success: true,
        },
      },
    },
    // Ajoutez d'autres tests ici
  ],
};
Exécutez les tests avec Thunder :

bash
Copier le code
thunder run thunder.config.js
Contribution
Les contributions sont les bienvenues ! Veuillez suivre ces étapes pour contribuer :

Forkez le dépôt.
Créez une branche pour votre fonctionnalité ou correctif (git checkout -b feature/ma-fonctionnalite).
Faites vos modifications.
Faites un commit (git commit -am 'Ajout de ma fonctionnalité').
Poussez la branche (git push origin feature/ma-fonctionnalite).
Ouvrez une Pull Request.
Licence
Ce projet est sous licence ISC. Voir le fichier LICENSE pour plus de détails.

Auteurs
Nour Ounissi - Développeur principal - Votre Profil GitHub
N'hésitez pas à personnaliser ce modèle pour mieux correspondre à votre projet et à vos préférences. Si vous avez besoin d'ajuster quelque chose ou d'ajouter des détails supplémentaires, faites-le moi savoir !






Vous avez dit :

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

ChatGPT a dit :
ChatGPT
Voici un fichier README.md adapté pour le code que vous avez fourni, en tenant compte des fonctionnalités de votre application Express et de l'utilisation de Thunder pour les tests.

NodeJS CRUD Application
Description
Cette application Node.js fournit une API CRUD pour gérer les étudiants en utilisant Express et Mongoose avec une base de données MongoDB. Le projet utilise également Thunder pour les tests.

Prérequis
Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

Node.js (version 16 ou supérieure)
MongoDB Atlas pour la base de données en ligne
Thunder pour les tests
Installation
Clonez le dépôt :

bash
Copier le code
git clone https://github.com/nom_utilisateur/nom_du_depot.git
cd nom_du_depot
Installez les dépendances :

bash
Copier le code
npm install
Créez un fichier .env à la racine du projet avec les informations suivantes :

php
Copier le code
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
Remplacez <username>, <password>, et <dbname> par vos informations MongoDB Atlas.

Utilisation
Démarrez l'application :

bash
Copier le code
npm start
L'application sera disponible à l'adresse http://localhost:5000.

API Endpoints
GET /etudiants : Récupère tous les étudiants.
POST /ajouter_etudiant : Ajoute un nouvel étudiant. Les informations doivent être fournies dans le corps de la requête en tant que JSON (ex: {"cin": "12345", "nom": "Doe", "prenom": "John", "email": "john.doe@example.com"}).
DELETE /delete/:id : Supprime un étudiant par son ID.
PUT /maj/:id : Met à jour l'email d'un étudiant par son ID. Les informations doivent être fournies dans le corps de la requête en tant que JSON (ex: {"email": "new.email@example.com"}).
Tests avec Thunder
Configuration de Thunder
Assurez-vous que Thunder est installé globalement :

bash
Copier le code
npm install -g thunder
Créez un fichier de configuration Thunder pour les tests, par exemple thunder.config.js :

javascript
Copier le code
module.exports = {
  url: 'http://localhost:5000',
  tests: [
    {
      description: 'Test de la route GET /etudiants',
      request: {
        method: 'GET',
        url: '/etudiants',
      },
      expectedResponse: {
        status: 200,
        body: Array,
      },
    },
    {
      description: 'Test de la route POST /ajouter_etudiant',
      request: {
        method: 'POST',
        url: '/ajouter_etudiant',
        body: {
          cin: '12345',
          nom: 'Doe',
          prenom: 'John',
          email: 'john.doe@example.com',
        },
      },
      expectedResponse: {
        status: 200,
        body: 'sauvegarde effectué avec succées!',
      },
    },
    {
      description: 'Test de la route DELETE /delete/:id',
      request: {
        method: 'DELETE',
        url: '/delete/60d5f4815f4f2c6e8b2a6d1e', // Remplacez par un ID valide
      },
      expectedResponse: {
        status: 200,
        body: 'Étudiant supprimé avec succès !',
      },
    },
    {
      description: 'Test de la route PUT /maj/:id',
      request: {
        method: 'PUT',
        url: '/maj/60d5f4815f4f2c6e8b2a6d1e', // Remplacez par un ID valide
        body: {
          email: 'new.email@example.com',
        },
      },
      expectedResponse: {
        status: 200,
        body: 'Mise à jour effectuée avec succès !',
      },
    },
  ],
};
Exécutez les tests avec Thunder :

bash
Copier le code
thunder run thunder.config.js
Contribution
Les contributions sont les bienvenues ! Veuillez suivre ces étapes pour contribuer :

Forkez le dépôt.
Créez une branche pour votre fonctionnalité ou correctif (git checkout -b feature/ma-fonctionnalite).
Faites vos modifications.
Faites un commit (git commit -am 'Ajout de ma fonctionnalité').
Poussez la branche (git push origin feature/ma-fonctionnalite).
Ouvrez une Pull Request.
Licence
Ce projet est sous licence ISC. Voir le fichier LICENSE pour plus de détails.

Auteurs
Nour Ounissi - Développeur principal - Votre Profil GitHub
