import { Magician } from './Magician';
import { Daemon } from './Daemon';
import ArrayBufferConverter from './ArrayBufferConverter';
import { getBuffer } from './getBuffer';

// Пример использования классов
const magician = new Magician('Gandalf');
magician.attack = 100;
magician.distance = 2;
magician.stoned = true;
console.log(`Атака мага: ${magician.attack}`);

const buffer = getBuffer();
const converter = new ArrayBufferConverter();
converter.load(buffer);
console.log(converter.toString());
