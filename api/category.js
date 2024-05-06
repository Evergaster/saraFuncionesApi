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
        ],
        'blowjob': [
            /*1*/ { 'url': 'https://media.discordapp.net/attachments/1236697877666074636/1236872938137845760/hentai-girl-blowjob-gif-1-min.gif?ex=66399730&is=663845b0&hm=5c98a73faab65d9981b875da4e4dee9987d47c8d3463894d81e245aa54a6302d&=&width=1165&height=655', 'param': 'blowjob'},
            /*2*/ { 'url': 'https://cdn.discordapp.com/attachments/1236697877666074636/1236872938477715526/hentai-girl-blowjob-gif-2-min.gif?ex=66399730&is=663845b0&hm=58420f92836c228a70b593b3d646bea6aa925977aa74124fb843e7dc48344ece&', 'param': 'blowjob'},
            /*3*/ { 'url': 'https://cdn.discordapp.com/attachments/1236697877666074636/1236872938846683178/hentai-girl-blowjob-gif-min.gif?ex=66399730&is=663845b0&hm=56660f1e4e15e2a5bf05be8c8fa124bc5cce38ade89a3b7979d4703ea5cf276d&', 'param': 'blowjob'},
            /*4*/ { 'url': 'https://cdn.discordapp.com/attachments/1236697877666074636/1236872939329032212/R.gif?ex=66399730&is=663845b0&hm=6a276baf83b92964612d9bbb10ea7518e324fe1f19f57b7050da79577e534851&', 'param': 'blowjob'},
            /*5*/ { 'url': 'https://cdn.discordapp.com/attachments/1236697877666074636/1236872939715035247/tumblr_o3b89akpdK1tmu5n2o3_1280.gif?ex=66399730&is=663845b0&hm=e28b53ae1fbec6e5b41faf59e512b24619824121c0cffadfffcc72626f4673df&', 'param': 'blowjob'},
            /*6*/ { 'url': 'https://cdn.discordapp.com/attachments/1236697877666074636/1236872940142727280/url-hentai-blowjob-gif-1-min.gif?ex=66399730&is=663845b0&hm=d7a787dd25a294b1f0a1fc6945777fdf3b8f427140e68aaf50eba179f7045ae3&', 'param': 'blowjob'},
            /*7*/ { 'url': 'https://cdn.discordapp.com/attachments/1236697877666074636/1236872948208504923/hentai-fellatio-gif-2-min.gif?ex=66399732&is=663845b2&hm=cfef1e2d4d418f898a50dd280cbd6917f0b6f59e06be7aaccf4b2db6386d96f3&', 'param': 'blowjob'},
            /*8*/ { 'url': 'https://cdn.discordapp.com/attachments/1236697877666074636/1236872949521322097/anime-blowjob-gif-3-min.gif?ex=66399733&is=663845b3&hm=617e8d8692e9fc4dfa44690ba5725d9ed97c0aeb1459ea2b5d81a2ab3d2a9b38&', 'param': 'blowjob'},
            /*9*/ { 'url': 'https://media.discordapp.net/attachments/1236697877666074636/1236872949940617296/anime-blowjob-gif-min.gif?ex=66399733&is=663845b3&hm=b8c9e114c0785681da196f3c6c8e1acdd7c4a4cfa83dddb92c845a583715e984&=&width=1050&height=591', 'param': 'blowjob'},
            /*10*/ {'url': 'https://cdn.discordapp.com/attachments/1236697877666074636/1236872950381154375/anime-hentai-gif-13.gif?ex=66399733&is=663845b3&hm=9aec77efb7f88a2616a195737d51969681ab320bbf72b129fa9a9a3b4612553d&', 'param': 'blowjob'},
            /*11*/ { 'url': 'https://cdn.discordapp.com/attachments/1236697877666074636/1236872950851047506/bb.gif?ex=66399733&is=663845b3&hm=0698f4017aae24ff504e24c4326e87059b7b0a5b2ca99657573cdfe400610160&', 'param': 'blowjob'},
            /*12*/ { 'url': 'https://cdn.discordapp.com/attachments/1236697877666074636/1236872951207297144/forced-blowjob-hentai-gif-1-min.gif?ex=66399733&is=663845b3&hm=1d6540ffd2c300dc6589c5ff68277b9c43b2849c7f560cbe32593920c4275774&', 'param': 'blowjob'},
            /*13*/ {'url': 'https://cdn.discordapp.com/attachments/1236697877666074636/1236872951585050645/hentai-blowjob-gif-2-min_1.gif?ex=66399733&is=663845b3&hm=cf5daf8b8c0cfbaf5b7d59dfb0e5a458c0d1854c4962068aa54c4a3d99b01e10&', 'param': 'blowjob'}
        ],
        'hentai': [
            /*1*/ {'url': 'https://cdn.discordapp.com/attachments/1236698200426152016/1236873651123388426/simply-hentai-11.gif?ex=663997da&is=6638465a&hm=781b0b688c52fd08754589f15a82143de2c406f787bf6257cbf7aa6818cc8bf0&', 'param':'hentai'},
            /*2*/ {'url': 'https://cdn.discordapp.com/attachments/1236698200426152016/1236873651551473705/simply-hentai-12.gif?ex=663997da&is=6638465a&hm=cab03d18055e9f7212cab958b69e8b9340ce64eb725a1581655cbf60da05c0a4&', 'param': 'hentai'},
            /*3*/ {'url': 'https://cdn.discordapp.com/attachments/1236698200426152016/1236873651995807754/simply-hentai-13.gif?ex=663997da&is=6638465a&hm=d474e65a7cf98654f3f4873d5dfbc8c630214bd60e479b7c67b8e2bdc7b71f6e&', 'param': 'hentai'},
            /*4*/ {'url': 'https://cdn.discordapp.com/attachments/1236698200426152016/1236873695352324136/simply-hentai-10.gif?ex=663997e4&is=66384664&hm=78efdb87ecb7ab92187cea96496952591ceb4719e870b0cdd8a4a65bc0abe98f&', 'param': 'hentai'},
            /*5*/ {'url': 'https://cdn.discordapp.com/attachments/1236698200426152016/1236873695897845770/simply-hentai-1.gif?ex=663997e5&is=66384665&hm=cfa40a3e22a607c869679639eab94006bf46e723839a9b09e3b4677af89c7890&', 'param': 'hentai'},
            /*6*/ {'url': 'https://cdn.discordapp.com/attachments/1236698200426152016/1236873696610750464/simply-hentai-2.gif?ex=663997e5&is=66384665&hm=47eb31e3a7f0c52e1a6df94db816bd800fcf540fbcac64cb722b7bc8628ebc58&', 'param': 'hentai'},
            /*7*/ {'url': 'https://cdn.discordapp.com/attachments/1236698200426152016/1236873697684619264/simply-hentai-4.gif?ex=663997e5&is=66384665&hm=a129d794485aae2424e52e52acf5dbded0e2dff4c3e9675b28a3ac51711963e4&', 'param': 'hentai'},
            /*8*/ {'url': 'https://cdn.discordapp.com/attachments/1236698200426152016/1236873698078756864/simply-hentai-5.gif?ex=663997e5&is=66384665&hm=5f6fd9c1b3cd490cda18a38526a9f2f4e519deed6eed63006884fb476342e26e&', 'param': 'hentai'},
            /*9*/ {'url': 'https://cdn.discordapp.com/attachments/1236698200426152016/1236873698481274950/simply-hentai-6.gif?ex=663997e5&is=66384665&hm=9121d178b345e9cc722c1247c9d737a536bc8a20764499ada1188dec9b3215dd&', 'param': 'hentai'},
            /*10*/ {'url': 'https://cdn.discordapp.com/attachments/1236698200426152016/1236873698863218738/simply-hentai-7.gif?ex=663997e5&is=66384665&hm=6c3b520f400073fa6d835dc8deb09885ac29a376d7fc10950713a6920c276fca&', 'param': 'hentai'},
            /*11*/ {'url': 'https://cdn.discordapp.com/attachments/1236698200426152016/1236873699257356308/simply-hentai-8.gif?ex=663997e5&is=66384665&hm=322b6c61be6d2f78c2fd28c770e7aeb26b858e724ceb39d66c416d0d7f1a5946&', 'param': 'hentai'},
            /*12*/ {'url': 'https://cdn.discordapp.com/attachments/1236698200426152016/1236873699752411146/simply-hentai-9.gif?ex=663997e6&is=66384666&hm=6c081b9705ac26391b5d5d77fc04d0769d73f702ca4825a2acbad0508f0d5cd3&', 'param': 'hentai'}
        ],
        'masturbation': [
            /*1*/ {'url': 'https://cdn.discordapp.com/attachments/1236698324178960485/1236876359695990834/6271bb1901121eb1083bec108bfdf48f.gif?ex=66399a60&is=663848e0&hm=7d335cb0246cbc082568ace8e69ba658f96ed357229fc2a86b80a70fc60305b9&', 'param': 'masturbation'},
            /*2*/ {'url': 'https://cdn.discordapp.com/attachments/1236698324178960485/1236876360106905691/98620551a67b1ccc939b707a30aa563a.gif?ex=66399a60&is=663848e0&hm=55df7942299c0902bc8374f3bc98e90dd3976c8ae9ffba9e438eb211b878de8b&', 'param': 'masturbation'},
            /*3*/ {'url': 'https://cdn.discordapp.com/attachments/1236698324178960485/1236876360530657290/0eefbc54218ad9a31e86dd1d100e01f4.gif?ex=66399a60&is=663848e0&hm=4552617f8405f908c5255e5a5cd533b20a7cb4bf8826d30fe678b573c475df47&', 'param': 'masturbation'},
            /*4*/ {'url': 'https://cdn.discordapp.com/attachments/1236698324178960485/1236876360916406364/6e8f94b3d38a1f03a4ece37073270503.gif?ex=66399a60&is=663848e0&hm=d4997f76eaf4d3584771b3f19dad2855ce350d1306d17dd6b39a0f459daa717f&', 'param': 'masturbation'},
            /*5*/ {'url': 'https://cdn.discordapp.com/attachments/1236698324178960485/1236876361285501000/12a251fa52061a9282a55821d1cea1cb.gif?ex=66399a60&is=663848e0&hm=e27314892d3d53f0ec84baa408b61cbf1381deba6f9fddb3b204141509bd5cff&', 'param': 'masturbation'},
            /*6*/ {'url': 'https://cdn.discordapp.com/attachments/1236698324178960485/1236876361629565018/120f6c14a3aa9724d69efc821dab0f62.gif?ex=66399a60&is=663848e0&hm=9425be0f354e24519bc6dde8510ae7f25be27bbd6194613809a32c59a059ef23&', 'param': 'masturbation'},
            /*7*/ {'url': 'https://cdn.discordapp.com/attachments/1236698324178960485/1236876362183086242/256_1000.gif?ex=66399a60&is=663848e0&hm=2a66db9bb224756ebf812873be9cad9a7b080682df0a121926f43cbbf373e632&', 'param': 'masturbation'},
            /*8*/ {'url': 'https://cdn.discordapp.com/attachments/1236698324178960485/1236876362547986494/0733f57ce003a67abf58737f27ff2bee.gif?ex=66399a60&is=663848e0&hm=9cbd719db597d35472f16effbb73bdc4ef8470aa335f38b75f8086db8e00d7c4&', 'param': 'masturbation'},
            /*9*/ {'url': 'https://cdn.discordapp.com/attachments/1236698324178960485/1236876362946576475/954_1000.gif?ex=66399a60&is=663848e0&hm=1ad9d06073b0d0c460d787ec1ed37574c3957df990a0b63bbd8cf5b9cecb3047&', 'param': 'masturbation'},
            /*10*/ {'url': 'https://cdn.discordapp.com/attachments/1236698324178960485/1236876363340709938/4790cf99fdfb22702f4735a7e1803bcf5878f4df.gif?ex=66399a61&is=663848e1&hm=025c6596900cebdf68034add6a132563f980853141de833ebbd53f598346606a&', 'param': 'masturbation'},
            /*11*/ {'url': 'https://cdn.discordapp.com/attachments/1236698324178960485/1236876415157276813/R_19.gif?ex=66399a6d&is=663848ed&hm=6e356186c314eba849eb4a3ad5f36204b8c38ce871d5b7a259a4d010a839e0d5&', 'param': 'masturbation'},
            /*12*/ {'url': 'https://cdn.discordapp.com/attachments/1236698324178960485/1236876415979360368/R_11.gif?ex=66399a6d&is=663848ed&hm=a33f762ad5bc39129a99bed894d71523d17f9c3da4dd6639db4a767637103e3c&', 'param': 'masturbation'},
            /*13*/ {'url': 'https://cdn.discordapp.com/attachments/1236698324178960485/1236876416365105222/R_12.gif?ex=66399a6d&is=663848ed&hm=99b31cb9649a5268302d64d1ad8f1283181a4cda386fb514672ebfc10243cbca&', 'param': 'masturbation'},
            /*14*/ {'url': 'https://cdn.discordapp.com/attachments/1236698324178960485/1236876416809828352/R_13.gif?ex=66399a6d&is=663848ed&hm=ea489913f8cff68927cee8d30d34b6b025645deb3b750c371c93ed04365ef275&', 'param': 'masturbation'},
            /*15*/ {'url': 'https://cdn.discordapp.com/attachments/1236698324178960485/1236876417124405388/R_14.gif?ex=66399a6d&is=663848ed&hm=20e5c5eeace23d761ba507c3e0166e3071e94ae933a70b9b239dcf1eee26b441&', 'param': 'masturbation'},
            /*16*/ {'url': 'https://cdn.discordapp.com/attachments/1236698324178960485/1236876417568997386/R_15.gif?ex=66399a6e&is=663848ee&hm=fb77b6eed25b0a2e9630fe75ad57743fbe8798dc517023ca1c3ff8a5f2458521&', 'param': 'masturbation'},
            /*17*/ {'url': 'https://cdn.discordapp.com/attachments/1236698324178960485/1236876418042957886/R_16.gif?ex=66399a6e&is=663848ee&hm=451d08870ec32c2ca9c031310091c619df833e834919849eb67f9a6f04a6a30f&', 'param': 'masturbation'},
            /*18*/ {'url': 'https://cdn.discordapp.com/attachments/1236698324178960485/1236876418533687386/R_17.gif?ex=66399a6e&is=663848ee&hm=1318d4d500c7dc42a739c908040f5aebb7a9e0511b50cfdf5a72511274e6d4bc&', 'param': 'masturbation'},
            /*19*/ {'url': 'https://cdn.discordapp.com/attachments/1236698324178960485/1236876418961510450/R_18.gif?ex=66399a6e&is=663848ee&hm=3bad150bfaacf68112cec14f0956b9b4bed70f88abb6f06f33c76583e5346cf9&', 'param': 'masturbation'},
            /*20*/ {'url': 'https://cdn.discordapp.com/attachments/1236698324178960485/1236876416172298291/R_9.gif?ex=66399a6d&is=663848ed&hm=f5ea13b915203d7d249579405ce7502064a709d855ff0f671d7701d2221233cb&', 'param': 'masturbation'},
            /*21*/ {'url': 'https://cdn.discordapp.com/attachments/1236698324178960485/1236876416549654619/0333351945e1709456eef52bac20362f.gif?ex=66399a6d&is=663848ed&hm=a14ca6d4c8b34462979eef81f9699c520d81d35eecb5b18fd56678c0ec69b25c&', 'param': 'masturbation'},
            /*22*/ {'url': 'https://cdn.discordapp.com/attachments/1236698324178960485/1236876416990318634/R_1.gif?ex=66399a6d&is=663848ed&hm=7f6386a9d62b6478b8d8afaed81d5c1ee513755eb9a776405e12f32167a496dd&', 'param': 'masturbation'},
            /*23*/ {'url': 'https://cdn.discordapp.com/attachments/1236698324178960485/1236876417464143893/R_2.gif?ex=66399a6d&is=663848ed&hm=7bdb6b7aabdf3de509fd54969602c49a8f0ee0245fe4e274305738cb68b4ff7e&', 'param': 'masturbation'},
            /*24*/ {'url': 'https://cdn.discordapp.com/attachments/1236698324178960485/1236876417833111552/R_3.gif?ex=66399a6e&is=663848ee&hm=8b45cbb8c4d407deac1ea6974d3ace12d73f12c59cb7ef25a9fcb54f877456f2&', 'param': 'masturbation'},
            /*25*/ {'url': 'https://cdn.discordapp.com/attachments/1236698324178960485/1236876418156335114/R_4.gif?ex=66399a6e&is=663848ee&hm=7fcc1e111b86a9ba83b4ebd99cfdb3b1532a0954abd5cc49e408d993f958bdb0&', 'param': 'masturbation'},
            /*26*/ {'url': 'https://cdn.discordapp.com/attachments/1236698324178960485/1236876418558857237/R_5.gif?ex=66399a6e&is=663848ee&hm=c154465852625b709f8a8bf9adc5d3b5df47649d2fe49029ea5f2dd4b779a01c&', 'param': 'masturbation'},
            /*27*/ {'url': 'https://cdn.discordapp.com/attachments/1236698324178960485/1236876418932019341/R_6.gif?ex=66399a6e&is=663848ee&hm=e04da16a4ee4bc1bc4c70442bee5f557415a9da563de878d19e777489eac8702&', 'param': 'masturbation'},
            /*28*/ {'url': 'https://cdn.discordapp.com/attachments/1236698324178960485/1236876419280408576/R_7.gif?ex=66399a6e&is=663848ee&hm=52946c79ca2f23bcc511fa19d6ca7e0f8bc1e44207296e291bd024e27b055328&', 'param': 'masturbation'},
            /*29*/ {'url': 'https://cdn.discordapp.com/attachments/1236698324178960485/1236876419615821834/R_8.gif?ex=66399a6e&is=663848ee&hm=1678b4a260c1a2b8ffa582de673a739e73dda60ea51928ebc4af00a87c5d3d43&', 'param': 'masturbation'},
            /*30*/ {'url': 'https://cdn.discordapp.com/attachments/1236698324178960485/1236876430403436624/R_20.gif?ex=66399a71&is=663848f1&hm=a0b2afdfba8aa83e118cf67f0f374f5703ea05ca1ff1a43dd93b0029db384dab&', 'param': 'masturbation'},
            /*31*/ {'url': 'https://cdn.discordapp.com/attachments/1236698324178960485/1236876430802161664/R_21.gif?ex=66399a71&is=663848f1&hm=0549e2d84e1f9283f568347150ae65ed4f75afe6296ba94d2303d38fd9c803ca&', 'param': 'masturbation'},
            /*32*/ {'url': 'https://cdn.discordapp.com/attachments/1236698324178960485/1236876431179517952/R.gif?ex=66399a71&is=663848f1&hm=accc2ea2e48ae3a5d8bbb736492838f472b08f73049ebbacd6bce6b9fe2a1b16&', 'param': 'masturbation'},
            /*33*/ {'url': 'https://cdn.discordapp.com/attachments/1236698324178960485/1236876431598813256/R_22.gif?ex=66399a71&is=663848f1&hm=f80bb889d4f1045c6f1c1bf86bdbf958d6eb9ca7a90a7fe5fb014f548ee77238&', 'param': 'masturbation'},
            /*34*/ {'url': 'https://cdn.discordapp.com/attachments/1236698324178960485/1236876431598813256/R_22.gif?ex=66399a71&is=663848f1&hm=f80bb889d4f1045c6f1c1bf86bdbf958d6eb9ca7a90a7fe5fb014f548ee77238&', 'param': 'masturbation'},
        ]
    };

    if (category in data) {
        const randomItem = data[category][Math.floor(Math.random() * data[category].length)];
        res.json(randomItem);
    } else {
        res.status(404).json({error: 'Categoría no encontrada'});
    }
};