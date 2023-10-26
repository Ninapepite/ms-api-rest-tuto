## On part de l'image node alpine (version LTS)
FROM node:lts-alpine
## On met à jour les packages
RUN apk update && apk upgrade
## On créé un dossier pour les images
RUN mkdir /imagesIA
## On définit le dossier de travail
WORKDIR /app
## On copie le fichier package.json et index.js
COPY package*.json .
COPY index.js .
## on installe les dépendances
RUN npm install
## On expose le port 3000
EXPOSE 3000
## On lance l'application
CMD ["npm", "start"]
