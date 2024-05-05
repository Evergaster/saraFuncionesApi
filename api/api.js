const express = require('express');
const app = express();

// Colecciones de ejemplo para cada categoría, reemplázalas con tus propios datos
const data = {
    'neko': [
        { 'url': 'https://example.com/neko1.jpg' },
        { 'url': 'https://example.com/neko2.jpg' },
        // Agrega más objetos aquí...
    ],
    'anime': [
        { 'url': 'https://example.com/anime1.jpg' },
        { 'url': 'https://example.com/anime2.jpg' },
        // Agrega más objetos aquí...
    ],
    'ass': [
        { 'url': 'https://media.discordapp.net/attachments/1236697794618851431/1236709623424356403/e8347d7781122c13aecd688f72806c11.gif?ex=6638ff17&is=6637ad97&hm=4f448bc661cd90d38971b59bdeadd89c86b8d975089893101581623d9fde2b43&=&width=463&height=654',
         'param': 'ass'},
        { 'url': 'https://media.discordapp.net/attachments/1236697794618851431/1236699629098111016/animated-hentai-ass.gif?ex=6638f5c8&is=6637a448&hm=46e96f292588f9de9d85da855615365b9bb0bc08e1f00b20ae6178cb6e8d7afd&=&width=597&height=655',
         'param': 'ass'},
    ]
    // Agrega más categorías aquí...
};

app.get('/api/:category', (req, res) => {
    const category = req.params.category;
    if (category in data) {
        const randomItem = data[category][Math.floor(Math.random() * data[category].length)];
        res.json(randomItem);
    } else {
        res.status(404).json({error: 'Categoría no encontrada'});
    }
});

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});