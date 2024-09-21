// class - це завод з виробництва обʼєктів

// class - ключове слово для створення класу
// після ключового слова завжди буде назва класу
// Назва класу завжди пишеться  з великої літери
// інкапсуляція реалізується за допомогою приватних властивостей та методів
// щоб зробити методи та властивості приватними ма маємо з вами додати перед їх ініціалізацією #
class Character {
  //приватна властивість магія
  // Приватна властивість - це та властивість яка недоступна у зовнішньому коді а доступна тільки всередині класу
  //Ми можемо це виправити за допомогою гетерів та сетерів
  #name;
  #mana;
  #health;
  #damage;

  // constructor - функція яка виконує дію зборки вашого обʼєкту (ініціалізації початкових значень вашого нового обʼєкту)
  constructor(name, health, mana, damage = 100) {
    // this.name - створення в обʼєкті ключа name
    //  = name - присвоєня значення до ключа
    this.#name = name;
    this.#health = health;
    this.#mana = mana;
    this.#damage = damage;
  }

  get name() {
    return this.#name;
  }

  get mana() {
    return this.#mana;
  }

  get health() {
    return this.#health;
  }

  set health(newHealth) {
    // тернарний оператор
    //  newHealth > 0 - умова
    //? newHealth - якщо умова справдлилась підставити значення одразу після знаку питання
    //: 0 - якщо умова не справдилась то застосувати 0
    this.#health = newHealth > 0 ? newHealth : 0;
  }

  get damage() {
    return this.#damage;
  }

  set changeName(newName) {
    if (newName === "") {
      throw new Error("Введіть правильне імʼя");
    }
    this.#name = newName;
  }

  isAlive() {
    // оператори порівняння повертають true або false
    // > - true або false
    // if (this.#health > 0) {
    //   return true;
    // } else {
    //   return false;
    // }
    return this.#health > 0;
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

const qwerty = new Character("nickName", 100, 100, 100);

console.log(qwerty.name);
console.log(qwerty.damage);
console.log(qwerty.health);
console.log(qwerty.mana);

// qwerty.#damage = 1000;
console.log(qwerty.damage);

console.log(qwerty.mana);

console.log((qwerty.changeName = "asdasasdas"));

console.log(qwerty.name);
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
  // static role = {
  //   WARRIOR: "Воїн",
  // };

  #heroSpell;
  // оскільки даний клас наслідується від Character то ми можемо використовувати його конструктор за допомогою ключового слова super
  constructor(name, health, damage, mana, heroSpell = "fireBoll") {
    // Використання батьківського конструктору(унаслідували)
    super(name, health, mana, damage);
    this.#heroSpell = heroSpell;

    // this.role = "asdasd";
  }

  get heroSpell() {
    return this.#heroSpell;
  }

  attack() {
    console.log(`застосовується ${this.#heroSpell}`);
  }
}

const Petro = new Hero("Petro", 100, 100, 100);

// console.log((Petro.role = "qwerty"));
// console.log(Petro.role);

// console.log(Petro.role);

// Petro.mana = 1000;

console.log(Petro.mana);

Petro.attack();
// console.log((Petro.heroSpell = "nothing"));

console.log(Petro.heroSpell);

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

class User {
  // constructor за замовчуванянм
  constructor() {}
}

const user = new User();
console.log(user);

console.log(new Enemy("asd"));

[].filterFunc();
