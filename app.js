let fig = require('./collectibles');

let hotToys = fig.figurasHotToys, bandai = fig.figurasBandai,  starWars = fig.figurasStarWars;

let unifiedCollectibles = (...figuras) => figuras
let uCollectibles = unifiedCollectibles(hotToys, bandai, starWars);

let collectibles = {
    figuras: uCollectibles,
    listFigures: function(){
        for(let i = 0; i < this.figuras.length; i++){ // for para recorrer el arreglo primario
            this.figuras[i].forEach(item =>{ // el metodo forEach recorre los arreglos secundarios...
                console.log(`Figura de ${item.nombre}, de marca ${item.marca}. Precio: ${item.precio}. Unidades en stock: ${item.stock}\n`);
            })
        }
    },
    figuresByBrand: function (brand) {
        let figuresByBrand = [];

        for(let x of this.figuras){ // for que recorre el arreglo primario
            x.filter(item => { // el metodo filter reccorre el arreglo secundario...
                return item.marca == brand ? figuresByBrand = x: '' //condicional que indica si la marca incertada es igual a la que se tiene, en caso de coincidir almacena en "figuresByBrand" el objeto.
            })
        }
        return figuresByBrand;
    },
                                                                                                                                            
}
console.log(collectibles.figuras);
collectibles.listFigures();
console.log(collectibles.figuresByBrand('Bandai'));
// console.log(collectibles);