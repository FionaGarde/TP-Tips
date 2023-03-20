# TP-Tips

Ce projet permet de gérer les pourboires et les services dans un restaurant. Il offre un CRUD pour les pourboires, les services, les tables et le personnels, ainsi qu'une authentification JWT pour les administrateurs.

Prérequis
Node.js
MongoDB

Installation
Clonez le dépôt Git :

git clone https://github.com/votre-nom-utilisateur/votre-projet.git

Accédez au répertoire du projet :

cd votre-projet

Installez les dépendances :

npm install

Créez un fichier .env à la racine du projet avec les informations d'identification de votre base de données MongoDB et le secret JWT.

Consultez le fichier .env.example pour voir la structure requise.

Démarrez le serveur de développement :
npm run dev

Votre serveur devrait être opérationnel et écouter sur le port spécifié dans le fichier .env.

API Endpoints

Tips
GET /api/tips : Récupère la liste des tips.
POST /api/tips : Crée un nouveau tip.
GET /api/tips/:id : Récupère un tip spécifique.
PUT /api/tips/:id : Met à jour un tip spécifique.
DELETE /api/tips/:id : Supprime un tip spécifique.

Services
GET /api/services : Récupère la liste des services.
POST /api/services : Crée un nouveau service.
GET /api/services/:id : Récupère un service spécifique.
PUT /api/services/:id : Met à jour un service spécifique.
DELETE /api/services/:id : Supprime un service spécifique.

Personnel (Users)
GET /api/users : Récupère la liste des utilisateurs.
POST /api/users : Crée un nouvel utilisateur.
GET /api/users/:id : Récupère un utilisateur spécifique.
PUT /api/users/:id : Met à jour un utilisateur spécifique.
DELETE /api/users/:id : Supprime un utilisateur spécifique (sans perte de données).

Authentification Admin
POST /api/auth : Authentifie un administrateur et génère un token JWT.

Contribution
Pour contribuer à ce projet, veuillez soumettre une pull request avec vos modifications. Assurez-vous de respecter les conventions de code et les exigences du projet.

Licence
Ce projet est distribué sous une licence open source. Consultez le fichier LICENSE pour plus d'informations.
