# Léo TRAN, Eliot MEURILLON, Ulysse GUILLOT Groupe 3

# ProjetAngular

Ce projet est une application web de gestion d'annonces, développée avec [Angular CLI](https://github.com/angular/angular-cli) version 18.2.12. L'application permet aux utilisateurs de s'inscrire, de se connecter, de publier des annonces, de consulter les annonces publiées par d'autres utilisateurs et de filtrer les annonces par différents critères.

## Fonctionnalités

- **Authentification** : Les utilisateurs peuvent s'inscrire et se connecter à l'application.
- **Gestion des annonces** : Les utilisateurs peuvent ajouter, modifier et supprimer leurs annonces.
- **Filtrage des annonces** : Les utilisateurs peuvent filtrer les annonces par titre, description, prix et email de l'utilisateur.
- **Affichage des détails des annonces** : Les utilisateurs peuvent consulter les détails d'une annonce spécifique et voir les autres annonces publiées par le même utilisateur.

## Technologies Utilisées

- Angular
- Firebase
- Bootstrap
- SCSS

## Prérequis

Assurez-vous d'avoir [Node.js](https://nodejs.org/) installé sur votre machine.

## Installation

1. Clonez le dépôt :
   ```sh
   git clone https://github.com/yeyo671/projet-angular-m2-efrei.git
   ```

2. Aller dans le dossier
   ```sh
   cd projet-angular-m2-efrei
   ```

2. Installer les dépendances:
    `npm install`

# Guide de l'Application

## Identifiants de Test
- **Nom d'utilisateur** : `test@gmail.com`  
- **Mot de passe** : `test123`  

---

## Serveur de Développement
- Exécutez `ng serve` pour démarrer un serveur de développement.
- Accédez à [http://localhost:4200/](http://localhost:4200/).
- L'application se rechargera automatiquement si vous modifiez l'un des fichiers sources.

---

## Construction
- Exécutez `ng build` pour construire le projet.
- Les artefacts de construction seront stockés dans le répertoire `dist/`.

---

## Exécution des Tests Unitaires
- Exécutez `ng test` pour exécuter les tests unitaires via Karma.

---

## Exécution des Tests de Bout en Bout
- Exécutez `ng e2e` pour exécuter les tests de bout en bout via une plateforme de votre choix.
- **Note** : Pour utiliser cette commande, vous devez d'abord ajouter un package qui implémente des capacités de test de bout en bout.

---

## Utilisation
1. Inscrivez-vous ou connectez-vous à l'application.
2. Ajoutez, modifiez ou supprimez vos annonces.
3. Filtrez les annonces par :
   - Titre
   - Description
   - Prix
   - Email de l'utilisateur
4. Consultez les détails d'une annonce spécifique et explorez d'autres annonces publiées par le même utilisateur.

# Routes de l'Application

| **Route**          | **Description**                                  
|---------------------|--------------------------------------
| `/`                | Page d'accueil                                       
| `/signup`          | Page d'inscription                                  
| `/login`           | Page de connexion                                   
| `/product/:id`     | Page de détails d'un produit                         
| `/add-product`     | Page d'ajout de produit                              
| `/my-ads`          | Page de gestion de mes annonces                      

