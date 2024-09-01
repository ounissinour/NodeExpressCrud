#Description#
Cette API Node.js permet de gérer les informations des étudiants à l'aide de CRUD (Create, Read, Update, Delete) operations. L'application est construite avec Express pour le serveur web et Mongoose pour la gestion de la base de données MongoDB.

Fonctionnalités
Création d'un étudiant : Ajouter un nouvel étudiant à la base de données avec des détails tels que le CIN, le nom, le prénom et l'email.
Lecture des étudiants : Récupérer la liste de tous les étudiants enregistrés dans la base de données.
Mise à jour des informations : Mettre à jour l'email d'un étudiant spécifique.
Suppression d'un étudiant : Supprimer un étudiant de la base de données en utilisant son ID.
Endpoints de l'API
GET /etudiants
Description : Récupère la liste de tous les étudiants.
Réponse :
Code 200 : Liste des étudiants.
POST /ajouter_etudiant
Description : Ajoute un nouvel étudiant à la base de données.
Paramètres de la Requête :
cin : CIN de l'étudiant.
nom : Nom de l'étudiant.
prenom : Prénom de l'étudiant.
email : Email de l'étudiant.
Réponse :
Code 200 : Message de confirmation de sauvegarde réussie.
Code 400 : Erreur de validation des données.
PUT /maj/:id
Description : Met à jour l'email d'un étudiant spécifique.
Paramètres de la Requête :
id : ID de l'étudiant à mettre à jour.
email : Nouveau email de l'étudiant.
Réponse :
Code 200 : Message de confirmation de mise à jour réussie.
Code 404 : Étudiant non trouvé.
DELETE /delete/:id
Description : Supprime un étudiant de la base de données.
Paramètres de la Requête :
id : ID de l'étudiant à supprimer.
Réponse :
Code 200 : Message de confirmation de suppression réussie.
Code 404 : Étudiant non trouvé.
Prérequis
Node.js : Assurez-vous que Node.js est installé sur votre machine.
MongoDB Atlas : Une base de données MongoDB en ligne (Atlas) doit être configurée.
Installation
Cloner le Dépôt :

Clonez le projet depuis le dépôt GitHub.
Installer les Dépendances :

Exécutez npm install pour installer toutes les dépendances nécessaires.
Configurer les Variables d'Environnement :

Créez un fichier .env à la racine du projet avec la chaîne de connexion MongoDB (MONGO_URI).
Démarrage
Démarrer le Serveur :

Utilisez npm start pour démarrer le serveur.
Accéder à l'API :

L'application sera disponible à l'adresse http://localhost:5000.
Tests
Utilisation de Thunder : Pour tester les endpoints de l'API, vous pouvez utiliser Thunder en configurant un fichier de tests pour automatiser les vérifications des fonctionnalités.
Contribution
Les contributions sont les bienvenues. Pour contribuer :

Forkez le dépôt.
Créez une branche pour votre fonctionnalité ou correctif.
Faites vos modifications.
Soumettez une Pull Request.
Licence
Ce projet est sous licence ISC. Consultez le fichier LICENSE pour plus de détails.

Auteurs
Nour Ounissi - Développeur principal - Votre Profil GitHub
