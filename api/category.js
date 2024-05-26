const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    const category = req.query.category;

    // Ruta al archivo JSON externo
    const categoriesFilePath = path.join(__dirname, '../json/categories.json');

    // Lee el archivo JSON externo
    fs.readFile(categoriesFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo JSON:', err);
            res.status(500).json({ error: 'Error interno del servidor' });
            return;
        }

        try {
            const categoriesData = JSON.parse(data);

            if (category in categoriesData) {
                const randomItem = categoriesData[category][Math.floor(Math.random() * categoriesData[category].length)];
                res.json(randomItem);
            } else {
                res.status(404).json({ error: 'Categoría no encontrada' });
            }
        } catch (parseError) {
            console.error('Error al analizar el JSON:', parseError);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    });
};
