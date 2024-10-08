import Character from '../src/Character';

describe('Character class', () => {
  test('should create character with correct name and type', () => {
    const character = new Character('Gandalf', 'Magician');
    expect(character.name).toBe('Gandalf');
    expect(character.type).toBe('Magician');
    expect(character.attackValue).toBe(100);
    expect(character.distance).toBe(1);
    expect(character.stoned).toBe(false);
  });

  test('should throw an error for incorrect character type', () => {
    expect(() => new Character('Gandalf', 'Warrior')).toThrow('Некорректный тип персонажа');
  });

  test('should calculate attack without stoned effect', () => {
    const character = new Character('Gandalf', 'Magician');
    character.distance = 2; 
    character.stoned = false; 
    expect(character.attack).toBe(90); 
  });

  test('should calculate attack with stoned effect', () => {
    const character = new Character('Gandalf', 'Magician');
    character.distance = 2; 
    character.stoned = true; 
    expect(character.attack).toBe(85); 
  });

  test('should calculate attack without stoned effect at higher distances', () => {
    const character = new Character('Sauron', 'Daemon');
    character.attack = 100; 
    character.distance = 5; 
    character.stoned = false; 
    expect(character.attack).toBe(60); 
  });

  test('attack should never be negative', () => {
    const character = new Character('Sauron', 'Daemon');
    character.attack = 10; 
    character.distance = 10; 
    character.stoned = true; 
    expect(character.attack).toBe(0); 
  });
});
