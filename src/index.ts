import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollections } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(sorter.collection);

const charactersCollection = new CharactersCollections('Xaayb');
const sorterChar = new Sorter(charactersCollection);
sorterChar.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(3);
linkedList.add(4);

const sorterList = new Sorter(linkedList);
sorterList.sort();
linkedList.print();
