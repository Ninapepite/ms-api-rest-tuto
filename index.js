// Importation de la librairie express
const express = require('express');
// Importation de la librairie openai
const OpenAI = require('openai');
//Import fs path librairie
const fs = require('fs');
// Creation d'une instance de l'api openai
const openai = new OpenAI();
// Async méthode pour générer une image avec OpenAI
async function generateImage() {
    // Génération d'une image avec OpenAI
    const image = await openai.images.generate({ prompt: "A cute cat please" });
    // Affichage de l'image générée dans le terminal
    console.log(image.data);
    // Enregistrer l'image dans un dossier local /imagesIA
    fs.writeFile("./imagesIA/image.png", image.data, 'binary', function (err) {
        if (err) throw err;
        console.log('Image saved.');
    });

}

// Creation de l'instance express
const app = express();
// Port d'écoute de l'application
const port = 3000;
// Creation d'une route par défaut
app.get('/api', (req, res) => res.send("Hello World ! L'api fonctionne bien"));
//Route pour générer l'image
app.get('/api/ai', (req, res) => { generateImage(); });
// Lancement de l'application
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
