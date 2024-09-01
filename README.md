Description
API Node.js pour gérer les informations des étudiants.
Utilise Express pour le serveur web et Mongoose pour la gestion de MongoDB.
Fonctionnalités
Création : Ajouter un nouvel étudiant.
Lecture : Récupérer la liste de tous les étudiants.
Mise à jour : Mettre à jour l'email d'un étudiant.
Suppression : Supprimer un étudiant par son ID.
Endpoints de l'API
GET /etudiants

Description : Récupère tous les étudiants.
Réponse : Liste des étudiants.
POST /ajouter_etudiant

Description : Ajoute un nouvel étudiant.
Paramètres :
cin : CIN de l'étudiant.
nom : Nom de l'étudiant.
prenom : Prénom de l'étudiant.
email : Email de l'étudiant.
Réponse :
200 : Sauvegarde réussie.
400 : Erreur de validation.
PUT /maj/:id

Description : Met à jour l'email d'un étudiant.
Paramètres :
id : ID de l'étudiant.
email : Nouveau email.
Réponse :
200 : Mise à jour réussie.
404 : Étudiant non trouvé.
DELETE /delete/:id

Description : Supprime un étudiant par son ID.
Paramètres :
id : ID de l'étudiant.
Réponse :
200 : Suppression réussie.
404 : Étudiant non trouvé.
Prérequis
Node.js : Version 16 ou supérieure.
MongoDB Atlas : Configuration d'une base de données en ligne.
Installation
Cloner le Dépôt :

bash
Copier le code
git clone https://github.com/nom_utilisateur/nom_du_depot.git
cd nom_du_depot
Installer les Dépendances :

bash
Copier le code
npm install
Configurer les Variables d'Environnement :

Créez un fichier .env avec MONGO_URI.
Démarrage
Démarrer le Serveur :

bash
Copier le code
npm start
Accéder à l'API :

URL : http://localhost:5000
Tests
Thunder : Utilisez Thunder pour automatiser les tests de l'API.
Contribution
Étapes pour Contribuer :
Forkez le dépôt.
Créez une branche pour vos modifications.
Faites un commit.
Poussez la branche.
Soumettez une Pull Request.
Licence
Licence : ISC
Consultez le fichier LICENSE pour plus de détails.
Auteurs
Nour Ounissi - Développeur principal - Votre Profil GitHub
