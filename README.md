## Before you start
in order to run this project, make sure you have docker and then global Angular CLI installed on your machine

Docker: 
https://docs.docker.com/compose/install/

Angular CLI: 
https://cli.angular.io/

## Client
```bash
yarn
ng serve --open
```
Runs on localhost on port 4200

## Server
```bash
docker-compose up -d
```
or if you want to tail logs:
```bash
docker-compose up
```
If you ran in detached mode
```bash
docker-compose down --volumes
```
Runs on localhost on port 8000
