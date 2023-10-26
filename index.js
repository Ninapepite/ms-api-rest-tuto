const express = require('express');
// Creation de l'instance express
const app = express();
// Port d'écoute de l'application
const port = 3000;
// Creation d'une route par défaut
app.get('/api', (req, res) => res.send('Hello World!'));
// Lancement de l'application
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
