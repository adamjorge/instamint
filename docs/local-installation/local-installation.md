[English version]
[Version française]

# Installation guide to install the project locally {#english-version}

## Prerequisites

- You need to have Node installed on your machine (v.20.12.1) and npm (v.10.8.0): these versions are the ones used to develop the project.
- You need to have a local PostgreSQL database installed on your machine.
- To handle the features that require images storage, you need to have your own AWS S3 bucket (and the credentials to access it).
- Docker is optional but some command lines are already provided in the Makefile to populate the database with some data.

## Installation

1. Clone the repository on your machine (or download the zip file and extract it).

2. Install the dependencies by running the following command in the root folder of the project:

```bash
npm i
```

3. Create your own `.env` file in the root folder of the project. You can use the `.env.example` file as a template.
   ** Vercel .env variables are not mandatory for local installation. All the other variables are mandatory. **

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

# Installation guide to install the project locally {#english-version}

## Prerequisites

- You need to have Node installed on your machine (v.20.12.1) and npm (v.10.8.0): these versions are the ones used to develop the project.
- You need to have a local PostgreSQL database installed on your machine.
- To handle the features that require images storage, you need to have your own AWS S3 bucket (and the credentials to access it).
- Docker is optional but some command lines are already provided in the Makefile to populate the database with some data.

## Installation

1. Clone the repository on your machine (or download the zip file and extract it).

2. Install the dependencies by running the following command in the root folder of the project:

```bash
npm i
```

3. Create your own `.env` file in the root folder of the project. You can use the `.env.example` file as a template.
   ** Vercel .env variables are not mandatory for local installation. All the other variables are mandatory. **

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
