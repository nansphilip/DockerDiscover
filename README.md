# TODO APP & API

## How to start (dev)

### API

Inside `todo-api` directory

1. Run following command to install dependencies:
```bash
npm install
```

2. Copy the `.env.example` file to `.env` file:
```bash
cp .env.example .env
```

3. Run the following command to generate prisma (ORM) client + migrate the database:
```bash
npm run prisma:init
```

4. Run the following command to start the API:
```bash
npm run start:dev
```

The API should be running on `http://localhost:3000`.

### APP

Inside `todo-app` directory

1. Run following command to install dependencies:
```bash
npm install
```

2. Run the following command to start the app:
```bash
npm run dev
```

The app should be running on `http://localhost:3001` (as 3000 is already taken by API).

## How to build (Docker)

### APP

Inside `todo-app` directory

1. Run following command to build the API runner image:
```bash
docker build . -t todo-app --target runner
```

This command will build the image and tag it as `todo-app`.

2. Run following command to start the app:
```bash
docker run -p 5001:3000 todo-app
```

This command will run the image and map the port 5001 of your host to the port 3000 of the container.

3. Open your browser and go to `http://localhost:5001` to see the app running.

_Note : you can see the image generated with following command: `docker image ls | grep todo-app`_