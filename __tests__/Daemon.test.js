import { Daemon } from '../src/Daemon';

test('should calculate attack based on distance without stoned', () => {
  const daemon = new Daemon('Sauron');
  daemon.attack = 100;
  daemon.distance = 3;
  expect(daemon.attack).toBe(80);
});

test('should calculate attack based on distance with stoned', () => {
  const daemon = new Daemon('Sauron');
  daemon.attack = 100;
  daemon.distance = 3;
  daemon.stoned = true;
  expect(Math.round(daemon.attack)).toBe(72);
});
