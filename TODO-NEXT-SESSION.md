# TODO for next session

We saw in first session how to build a Docker image for the todo-app front application.

Your goal for next session will be to create a Dockerfile to build the todo-api back application image.

### General requirements

- You'll work in a team of 2 people maximum
- You'll push your code on a dedicated branch `feat/{lastname-01}-{lastname-02}`
  - Please push your code **only on the next session morning**, directly at school 
  - to avoid sharing your code with the world before the session

### Acceptance criterias

- **(10 points)** The Dockerfile must be able to build a Docker image for the todo-api application
  - the API must be runnable and usable from this container
- The Dockerfile must be optimized as much as possible to:
  - **(3 points)** Be fast to build (optimizing cache)
  - **(3 points)** Be light in terms of image size

Bonus:
- **(2 points)** There's a docker-compose file to run the app and api together
- **(1 point)** Good syntax and comments
- **(1 point)** Clean GIT history and commit messages

### Hints

- You can inspire from the todo-app Dockerfile, and installation steps for todo-api (in `README.md`)
- You can inspire from online documentation and best practices

### Help

Do not hesitate to contact me at `yoann.bohssain@gmail.com` if anything is unclear or if you need help.