# GraphQL Federation Template
GraphQL Federation template to use with distributed REST microservices.

# How it works
Each services is a package that you should add to **packages** folder and include to `docker-compose.yml`.

Start on your development environment running:
```bash
docker-compose up -d
```
# Getting started
## Structure
- **src**: contains the source code to linking all federated services.
- **packages**: contains the source code of each federated service
- **config**: contains the main config for each federated service

## Adding new federated service
- Create a folder inside packages to create and install own npm packages.
- Add service config on config folder.
- Add service federated to `src/server.js`.
- Add service to docker compose yml.
