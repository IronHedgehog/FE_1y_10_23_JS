// class - це завод з виробництва обʼєктів

// class - ключове слово для створення класу
// після ключового слова завжди буде назва класу
// Назва класу завжди пишеться  з великої літери
class Character {
  // constructor - функція яка виконує дію зборки вашого обʼєкту (ініціалізації початкових значень вашого нового обʼєкту)
  constructor(name, health, mana, damage = 100) {
    // this.name - створення в обʼєкті ключа name
    //  = name - присвоєня значення до ключа
    this._name = name;
    this._health = health;
    this._mana = mana;
    this._damage = damage;
  }

  get name() {
    return this.name;
  }

  set changeName(newName) {
    this._name = newName;
  }
  // звичайний метод обʼєкту який виводить в консоль завдану шкоду
  attackEnemy(enemy) {
    enemy.takeDamage(100);
    console.log(`Стукнув на ${this._damage}`);
  }

  takeDamage(damage) {
    this._health -= damage;
    console.log(
      `Отримано${this._damage} кількість шкоди. Залишилось ${this._health} здоровʼя`
    );
  }
}
// У константу hero ми створюємо нову сутність
// const hero = new Character("Hero", 100, 100, 100);
// const hero = new Character();
// const enemy = new Character();
// const superHero = new Character(200, 200, 200);
// const superEnemy = new Character(150, 150, 150);

// console.log(hero);

// console.log(superHero);
// console.log(superEnemy);

// superHero.doDamage();
// Наслідування: НАслідуються абсолютно всі методи та конструктори класу від якого ми насолідуємось

// для того щоб унаслідувати усі методи та конструктори класу character ми маємо застосувати при створенні класу HERO ключове слово extends після якого вказати клас від якого бажаєм наслідуватись
class Hero extends Character {
  // оскільки даний клас наслідується від Character то ми можемо використовувати його конструктор за допомогою ключового слова super
  constructor(name, health, damage, mana, heroSpell = "fireBoll") {
    // Використання батьківського конструктору
    super(name, health, mana, damage);
    this._heroSpell = heroSpell;
  }

  attack() {
    console.log(`застосовується${this.heroSpell}`);
  }
}

const Petro = new Hero(100, 100, 100);
Petro.attack();
console.log(Petro);

class Enemy extends Character {
  constructor(name, health, mana, damage, monsterSpell = "Roar") {
    super(name, health, mana, damage);
    this._monsterSpell = monsterSpell;
  }
  roar() {
    return "Ворог страшно ричить";
  }
}

const zombie = new Enemy(100, 100, 100);
console.log(zombie);

console.log(zombie.roar());

// Поліморфізм - полі(багато) морф(форма)
// поліморфізм = багато Форм

class Weapon {
  //у кожному класі який наслідується є метод use
  //В кожному новому класі в залежності від обставин ми можемо переписати код який є у методі use
  // Поліморіфізм - що метод має бути реалізованим і залежно від обставин дитячими елементами метод може бути переписаним
  use() {
    console.log("Взяв зброю");
  }
}

class Sword extends Weapon {
  use() {
    console.log("Ви взяли до рук меча");
  }
}

class Dagger extends Weapon {
  use() {
    console.log("Ви взяли до рук кинжал");
  }
}
class Bow extends Weapon {
  use() {
    console.log("Ви взяли до рук лук");
  }
}

class Game {
  constructor() {
    this._hero = null;
    this._monsters = [];
    this._weapon = null;
  }

  startGame() {
    this._hero = new Hero("Petro", 100, 20, 100, "frost arrow");
    this._monsters.push(new Enemy("Zombie", 50, 100, 10, "Спел Зомбі"));
    this._monsters.push(new Enemy("Гуль", 80, 50, 30, "Спел гуля"));
    this._weapon = new Sword();

    console.log("Гра почалась");
    console.log(`${this._hero.name} вирушає в подорож`);
  }
}
