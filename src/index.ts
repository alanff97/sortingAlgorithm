import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollections } from './CharactersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(sorter.collection);

const charactersCollection = new CharactersCollections('Xaayb');
const sorterChar = new Sorter(charactersCollection);
sorterChar.sort();
console.log(charactersCollection.data);
