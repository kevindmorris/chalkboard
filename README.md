# Chalkboard 📋

## What is Chalkboard? ✍

Chalkboard is a task management application designed for process improvement and the externalization of memory.

## Tech Stack 🚀

Chalkboard is built using the popular [MERN stack](https://www.oracle.com/database/mern-stack/#:~:text=The%20MERN%20stack%20is%20a,role%20in%20the%20development%20process.).

> The [MERN stack](https://www.oracle.com/database/mern-stack/#:~:text=The%20MERN%20stack%20is%20a,role%20in%20the%20development%20process.) is a collection of technologies that help developers build robust and scalable web applications using JavaScript. The acronym “MERN” stands for MongoDB, Express, React, and Node.js, with each component playing a role in the development process.

<p align="center">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="mongodb" width="50" height="50"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="express" width="50" height="50"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react" width="50" height="50"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="nodejs" width="50" height="50"/>
</p>

## Getting Started ("Production") 🏡

These steps will spin up an instance of Chalkboard in a stack of docker containers.

### Requirements

- [Docker](https://www.docker.com/)

### Steps

1. Open a terminal in the root of the project.

```bash
docker compose up
```

That's it! Open http://localhost:8080 to draw on your Chalkboard!

## Getting Started ("Development") 🔨

These steps will create a development enviroment.

### Requirements

- [Node](https://nodejs.org/en)
- [Docker](https://www.docker.com/) or some other mongo instance.

### Steps

1. Open a terminal in the root of the project. Spin up a mongo instance with docker or edit the source code to point at some mongo instance.

```bash
docker run -p 27017:27017 -d -e MONGO_INITDB_ROOT_USERNAME='root' -e MONGO_INITDB_ROOT_PASSWORD='root' mongo:latest
```

2. Start the API development server.

```bash
cd backend

npm i

npm run dev
```

3. Start the UI development server.

```bash
cd frontend

npm i

npm run dev
```
