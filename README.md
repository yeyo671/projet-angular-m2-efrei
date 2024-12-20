# Léo TRAN, Eliot MEURILLON, Ulysse GUILLOT Groupe 3

# ProjetAngular

Ce projet est une application web de gestion d'annonces, développée avec [Angular CLI](https://github.com/angular/angular-cli) version 18.2.12. L'application permet aux utilisateurs de s'inscrire, de se connecter, de publier des annonces, de consulter les annonces publiées par d'autres utilisateurs et de filtrer les annonces par différents critères.

## Fonctionnalités

- **Authentification** : Les utilisateurs peuvent s'inscrire et se connecter à l'application.
- **Gestion des annonces** : Les utilisateurs peuvent ajouter, modifier et supprimer leurs annonces.
- **Filtrage des annonces** : Les utilisateurs peuvent filtrer les annonces par titre, description, prix et email de l'utilisateur.
- **Affichage des détails des annonces** : Les utilisateurs peuvent consulter les détails d'une annonce spécifique et voir les autres annonces publiées par le même utilisateur.

## Prérequis

Assurez-vous d'avoir [Node.js](https://nodejs.org/) installé sur votre machine.

## Installation

1. Clonez le dépôt :
   ```sh
   git clone https://github.com/votre-utilisateur/projet-angular.git
   cd projet-angular

2. Installer les dépendances:
    `npm install`

## Identifiant de test

- username: test@gmail.com
- password: test123

## Serveur de développement

Exécutez `ng serve` pour démarrer un serveur de développement. Accédez à `http://localhost:4200/`. L'application se rechargera automatiquement si vous modifiez l'un des fichiers sources.

## Génération de code

Exécutez `ng generate component nom-composant` pour générer un nouveau composant. Vous pouvez également utiliser `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Construction

Exécutez `ng build` pour construire le projet. Les artefacts de construction seront stockés dans le répertoire `dist/`.

## Exécution des tests unitaires

Exécutez `ng test` pour exécuter les tests unitaires via [Karma](https://karma-runner.github.io).

## Exécution des tests de bout en bout

Exécutez `ng e2e` pour exécuter les tests de bout en bout via une plateforme de votre choix. Pour utiliser cette commande, vous devez d'abord ajouter un package qui implémente des capacités de test de bout en bout.

## Aide supplémentaire

Pour obtenir plus d'aide sur l'Angular CLI, utilisez `ng help` ou consultez la page [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).