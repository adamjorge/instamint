[English version](#english-version)
[Version française](#version-francaise)

# Installation guide to install the project locally {#english-version}

## Prerequisites

- You need to have Node installed on your machine (v.20.12.1) and npm (v.10.8.0): these versions are the ones used to develop the project.
- You need to have a local PostgreSQL database installed on your machine.
- To handle the features that require images storage, you need to have your own AWS S3 bucket (and the credentials to access it).
- Docker is optional but there is a docker compose file provided to launch a PostgreSQL database using:

```bash
docker compose up
```

## Installation

1. Clone the repository on your machine (or download the zip file and extract it).

2. Install the dependencies by running the following command in the root folder of the project:

```bash
npm i
```

3. Create your own `.env` file in the root folder of the project. You can use the `.env.example` file as a template.
   **Vercel .env variables are not mandatory for local installation. All the other variables are mandatory.**

4. Seed the database with some data and generate the Prisma client by running the following command in the root folder of the project:

```bash
npx prisma db push
npx prisma db seed
npx prisma generate
```

5. Start the server by running the following command in the root folder of the project:

In a dev environment (with hot reload and debug logs which can be a little bit slow):

```bash
npm run dev
```

In a production environment:

```bash
npm run build && npm run start
```

# Guide d'installation pour installer le projet localement {#version-francaise}

## Prérequis

- Vous devez avoir Node installé sur votre machine (v.20.12.1) ainsi que npm (v.10.8.0) : ces versions sont celles utilisées pour développer le projet.
- Vous devez avoir une base de données PostgreSQL locale installée sur votre machine.
- Pour gérer les fonctionnalités nécessitant le stockage d'images, vous devez avoir votre propre bucket AWS S3 (et les identifiants pour y accéder).
- Docker est optionnel mais il y a un fichier docker compose à la racine pour lancer une base de données PostgreSQL avec

```bash
docker compose up
```

## Installation

1. Clonez le dépôt sur votre machine (ou téléchargez le fichier zip et extrayez-le).

2. Installez les dépendances en exécutant la commande suivante dans le dossier racine du projet :

```bash
npm i
```

3. Créez votre propre fichier `.env` dans le dossier racine du projet. Vous pouvez utiliser le fichier `.env.example` comme modèle.
   **Les variables d'environnement Vercel ne sont pas obligatoires pour une installation locale. Toutes les autres variables sont obligatoires.**

4. Peupler la base de données avec quelques données et générer le client Prisma en exécutant les commandes suivantes dans le dossier racine du projet :

```bash
npx prisma db push
npx prisma db seed
npx prisma generate
```

5. Démarrez le serveur en exécutant la commande suivante dans le dossier racine du projet :

En environnement de développement (avec rechargement à chaud et journaux de débogage, ce qui peut être un peu plus lent) :

```bash
npm run dev
```

En environnement de production :

```bash
npm run build && npm run start
```
