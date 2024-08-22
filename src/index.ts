import { Pokemon } from './decorators/pokemon-class';

const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).customName = 'Pikachu';

// charmander.publicApi = 'https://fernando-herrera.com';
console.log(charmander);

// console.log(charmander.savePokemonToDB(50));
// charmander.savePokemonToDB(2);
