# NodeJS CRUD API for Students

## Description

Cette API Node.js permet de gérer les informations des étudiants avec des opérations CRUD (Create, Read, Update, Delete). Elle est construite avec **Express** pour le serveur web et **Mongoose** pour la gestion de MongoDB.

## Fonctionnalités

- **Création** : Ajouter un nouvel étudiant.
- **Lecture** : Récupérer la liste de tous les étudiants.
- **Mise à jour** : Mettre à jour l'email d'un étudiant.
- **Suppression** : Supprimer un étudiant par son ID.

## Endpoints de l'API

### GET `/etudiants`

- **Description** : Récupère la liste de tous les étudiants.
- **Réponse** : Liste des étudiants.

### POST `/ajouter_etudiant`

- **Description** : Ajoute un nouvel étudiant à la base de données.
- **Paramètres** :
  - `cin` : CIN de l'étudiant.
  - `nom` : Nom de l'étudiant.
  - `prenom` : Prénom de l'étudiant.
  - `email` : Email de l'étudiant.
- **Réponse** :
  - **200** : Sauvegarde réussie.
  - **400** : Erreur de validation.

### PUT `/maj/:id`

- **Description** : Met à jour l'email d'un étudiant spécifique.
- **Paramètres** :
  - `id` : ID de l'étudiant.
  - `email` : Nouveau email.
- **Réponse** :
  - **200** : Mise à jour réussie.
  - **404** : Étudiant non trouvé.

### DELETE `/delete/:id`

- **Description** : Supprime un étudiant par son ID.
- **Paramètres** :
  - `id` : ID de l'étudiant.
- **Réponse** :
  - **200** : Suppression réussie.
  - **404** : Étudiant non trouvé.

## Prérequis

- **Node.js** : Version 16 ou supérieure.
- **MongoDB Atlas** : Une base de données en ligne.

## Installation

1. **Cloner le Dépôt** :
   ```bash
   git clone https://github.com/nom_utilisateur/nom_du_depot.git
   cd nom_du_depot
