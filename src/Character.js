export default class Character {
    constructor(name, type) {
      const types = ['Magician', 'Daemon'];
      if (!types.includes(type)) {
        throw new Error('Некорректный тип персонажа');
      }
      this.name = name;
      this.type = type;
      this.attackValue = 100;
      this.distance = 1;
      this.stoned = false;
    }
  
    get stoned() {
      return this._stoned;
    }
  
    set stoned(value) {
      this._stoned = value;
    }
  
    get attack() {
      let attack = this.attackValue * (1 - (this.distance - 1) / 10);
      if (this.stoned) {
        attack -= Math.log2(this.distance) * 5;
      }
      return attack > 0 ? Math.round(attack) : 0;
    }
  
    set attack(value) {
      this.attackValue = value;
    }
  }
  