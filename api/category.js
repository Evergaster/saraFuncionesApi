// api/category.js
module.exports = (req, res) => {
    const category = req.query.category;
    const data = {
        'neko': [
        /*1*/ { 'url': 'https://media.discordapp.net/attachments/1236697726888968384/1236840884260044820/7m0v.gif?ex=66397956&is=663827d6&hm=26132b51cdfc512d587957ab508a82cccdafcd9e89c62527a0b20b2292833d77&=&width=471&height=655', 'param': 'neko'},
        /*2*/ { 'url': 'https://media.discordapp.net/attachments/1236697726888968384/1236840884742393856/neko-girl-acting-cute-keqejt09vsxvcds7.gif?ex=66397956&is=663827d6&hm=a2c8beb40ae513643a9444c027bf4d93f815802dafc5e22dde7a690339415957&=&width=1074&height=655', 'param': 'neko'},
        /*3*/ { 'url': 'https://media.discordapp.net/attachments/1236697726888968384/1236840885321465857/neko-girl-anime-crying-shilbas1ajg314x9.gif?ex=66397956&is=663827d6&hm=5ce6d09f5199057015b5214125ad4a3dd6c8c330a6b750d915f3e367f7491630&=&width=1167&height=655', 'param': 'neko'},
        /*4*/ { 'url': 'https://media.discordapp.net/attachments/1236697726888968384/1236840885711274066/6974d633d97662d9a023355030b936d97804e35e_hq.gif?ex=66397956&is=663827d6&hm=79cf943abaf19434018a2ef185115972096622c136001f40ac0e049c67889600&=&width=750&height=495', 'param': 'neko'},
        /*5*/ { 'url': 'https://media.discordapp.net/attachments/1236697726888968384/1236840886621700126/0f8ffcfcb4fd4e28d16e84b329ebc5f4bfad4386_hq.gif?ex=66397956&is=663827d6&hm=05349dff045410ebfd787d4e13acbfd2ba5a18737468cfded0f041afdf488de6&=&width=750&height=406', 'param': 'neko'},
        /*6*/ { 'url': 'https://media.discordapp.net/attachments/1236697726888968384/1236840887049256960/b5397d5803883e7d4a4b355d068a7375.gif?ex=66397956&is=663827d6&hm=63a469acfefa544358a08894be126a19214940bbf3706ce5d6cf72e4f5a33a48&=&width=585&height=354', 'param': 'neko'},
        /*7*/ { 'url': 'https://media.discordapp.net/attachments/1236697726888968384/1236840887414165624/3bf7efdde051788b28de216de8e024bfde7f9dcf_hq.gif?ex=66397956&is=663827d6&hm=1a84f9590f6508228a5b583337939184870fcdd24cee769e6fa0989f4b3ccfb4&=&width=600&height=513', 'param': 'neko'},
        ],
        'anime': [
            { 'url': 'https://example.com/anime1.jpg' },
            { 'url': 'https://example.com/anime2.jpg' },
            // Agrega más objetos aquí...
        ],
        'ass': [
           /*1*/ { 'url': 'https://media.discordapp.net/attachments/1236697794618851431/1236709623424356403/e8347d7781122c13aecd688f72806c11.gif?ex=6638ff17&is=6637ad97&hm=4f448bc661cd90d38971b59bdeadd89c86b8d975089893101581623d9fde2b43&=&width=463&height=654','param': 'ass'},
           /*2*/ { 'url': 'https://media.discordapp.net/attachments/1236697794618851431/1236699629098111016/animated-hentai-ass.gif?ex=6638f5c8&is=6637a448&hm=46e96f292588f9de9d85da855615365b9bb0bc08e1f00b20ae6178cb6e8d7afd&=&width=597&height=655','param': 'ass'},
           /*3*/ { 'url': 'https://cdn.discordapp.com/attachments/1236697794618851431/1236699629496828024/hentai-ass.gif?ex=6638f5c8&is=6637a448&hm=198f5b9cbf49d586ffd2a7d16da8463260670a35ca4bfe368429992e74f8d84e&','param': 'ass'},
           /*4*/ { 'url': 'https://cdn.discordapp.com/attachments/1236697794618851431/1236752413361438740/descarga.gif?ex=663926f1&is=6637d571&hm=6e4a4881b55ac2d7075cee317a59fa9b2cb913fbc1bae665284d8d92c65e4f04&','param': 'ass'},
           /*5*/ { 'url': 'https://cdn.discordapp.com/attachments/1236697794618851431/1236752413780873309/43560380e2be5e9ba97d9cb6c1efca18.gif?ex=663926f1&is=6637d571&hm=6a544082d3b29194db30946d537c2a6cd4ff95edfc851eb6b10e2ac5c55abdf6&','param': 'ass'},
           /*6*/ { 'url': 'https://media.discordapp.net/attachments/1236697794618851431/1236835782342213682/sa.gif?ex=66397495&is=66382315&hm=d9cdfcccda814c53ae5626d26818d57b70c0b3122a43890039173692cc8e350d&=&width=750&height=442','param': 'ass'},
           /*7*/ { 'url': 'https://media.discordapp.net/attachments/1236697794618851431/1236835782908579981/j0nuvu4i2nsa1.gif?ex=66397495&is=66382315&hm=92654b813859ec2d5832712b13e39ffa4367f20694a46519631e939565b07ac3&=&width=739&height=415','param': 'ass'},
           /*8*/ { 'url': 'https://media.discordapp.net/attachments/1236697794618851431/1236835783240061029/ass-tease.gif?ex=66397496&is=66382316&hm=d265cc02a2a95a86b76a43408fe14e9a8e29042979024ead619d2641440a342d&=&width=750&height=405','param': 'ass'},
           /*9*/ { 'url': 'https://media.discordapp.net/attachments/1236697794618851431/1236837168597434418/zpecof0pzlp91.gif?ex=663975e0&is=66382460&hm=1944a8ca61baa00140e5d6d74023148ffb2b01c9c2edac3e2d30bb71a1230eaa&=&width=372&height=525','param': 'ass'},
          /*10*/ { 'url': 'https://cdn.discordapp.com/attachments/1236697794618851431/1236839353347739648/ass.gif?ex=663977e9&is=66382669&hm=61da7d159f45a6c7d2b3140f740609d1c7d8fe017c4ec73c6eacbec28420ee49&', 'param': 'ass'},
          /*11*/ { 'url': 'https://media.discordapp.net/attachments/1236697794618851431/1236840855290118164/descarga1.gif?ex=6639794f&is=663827cf&hm=677f4f37a12337d0a361c527f0d4be4a3cdb8431c8cbab999da0b331410c032c&=&width=1243&height=655','param': 'ass'}
        ]
    };

    if (category in data) {
        const randomItem = data[category][Math.floor(Math.random() * data[category].length)];
        res.json(randomItem);
    } else {
        res.status(404).json({error: 'Categoría no encontrada'});
    }
};