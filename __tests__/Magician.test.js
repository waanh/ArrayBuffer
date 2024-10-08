import { Magician } from '../src/Magician';

test('should calculate attack based on distance without stoned', () => {
  const magician = new Magician('Gandalf');
  magician.attack = 100;
  magician.distance = 2;
  expect(magician.attack).toBe(90);
});

test('should calculate attack based on distance with stoned', () => {
  const magician = new Magician('Gandalf');
  magician.attack = 100;
  magician.distance = 2;
  magician.stoned = true;
  expect(magician.attack).toBe(85);
});
