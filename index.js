// Importation d'Express
const express = require("express");
const path = require("path");
const fs = require("fs");

// Initialisation d'une instance d'Express
const app = express();

// Configuration des vues EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Configuration des fichiers statiques (CSS, JavaScript, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Lecture des données des chansons à partir du fichier chansons.json
const songsData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "chansons.json"))
);

// Définition du port sur lequel l'application va écouter
const PORT = 8080;

// Route pour la page d'accueil
app.get("/", (req, res) => {
  res.render("index");
});

// Route pour la page Liste des Chansons
app.get("/songs", (req, res) => {
  res.render("songs", { songs: songsData });
});

// Route pour la page "Contactez-nous"
app.get("/contact", (req, res) => {
  res.render("contact"); // Renvoie la vue contact.ejs
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
