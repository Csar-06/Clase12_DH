const fs = require('fs');

// let input = 'bandai'

let importar = marca => {
    
    switch (marca) {
        case 'HOT TOYS':
           let figurasHotToys = fs.readFileSync('./datos/figuras1.json', 'utf-8')
           return JSON.parse(figurasHotToys)

        break;

        case 'BANDAI':
            let figurasBandai = fs.readFileSync('./datos/figuras2.json', 'utf-8')
            return JSON.parse(figurasBandai)
        break;

        case 'STAR WARS':
            let figurasStarWars = fs.readFileSync('./datos/figuras3.json', 'utf-8')
            return JSON.parse(figurasStarWars)

        break;
    
        default:
            return 'Marca de figuras no encontrada! 🫥';
        break;
    }
}

// console.log(importar(input.toLocaleUpperCase()));

let figurasHotToys = importar('hot Toys'.toLocaleUpperCase())
let figurasBandai = importar('bandai'.toLocaleUpperCase())
let figurasStarWars = importar('star wars'.toLocaleUpperCase())
module.exports = {figurasHotToys, figurasBandai, figurasStarWars}
// console.log(fs.readFileSync('./datos/figuras1.json', 'utf-8'));