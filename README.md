# TP-Tips

Ce projet permet de gérer les tips et les services dans un restaurant. Il offre un CRUD pour les tips récupéré, les tips a verser, les services, les tables et le personnel, ainsi qu'une authentification JWT pour les administrateurs. L'application devra être écrite en node en utilisant les package ci-dessous

# Prérequis - Package
Node, Nodemon Mongoose, Jsonwebtoken, Express, Env

Docker

# Installation
1 - Clonez le dépôt Git :
git clone https://github.com/FionaGarde/TP-Tips.git

2 - Accédez au répertoire du projet :
cd votre-projet

3 - Installez les dépendances :
npm install

4 - Créez un fichier .env à la racine du projet avec les informations d'identification de votre base de données MongoDB et le secret JWT.
Consultez le fichier .env pour voir la structure requise.

5 - Démarrez le serveur de développement :
docker compose up

Votre serveur devrait être opérationnel et écouter sur le port spécifié dans le fichier .env.

# API Endpoints

- Tips récupéré

CRUD

- Tips à verser

CRUD

- Services

CRUD

- Personnel (Users)

CRUD : Supprime un utilisateur spécifique (sans perte de données).

- Table

CRUD

- Authentification Admin

POST /api/admin : Authentifie un administrateur et génère un token JWT.

# [Contribution](https://github.com/FionaGarde/TP-Tips/blob/main/CONTRIBUTING.md)
Pour contribuer à ce projet, veuillez soumettre une pull request avec vos modifications. Assurez-vous de respecter les conventions de code et les exigences du projet.

# [Licence](https://github.com/FionaGarde/TP-Tips/blob/main/LICENSE)
Ce projet est distribué sous une licence open source. Consultez le fichier LICENSE pour plus d'informations.
