// class - це завод з виробництва обʼєктів

// class - ключове слово для створення класу
// після ключового слова завжди буде назва класу
// Назва класу завжди пишеться  з великої літери
class Character {
  // constructor - функція яка виконує дію зборки вашого обʼєкту
  constructor(name, health, mana, damage = 100) {
    // this.name - створення в обʼєкті ключа name
    //  = name - присвоєня значення до ключа
    this._name = name;
    this._health = health;
    this._mana = mana;
    this._damage = damage;
  }
  // звичайний метод обʼєкту який виводить в консоль завдану шкоду
  doDamage() {
    console.log(`Стукнув на ${this._damage}`);
  }
}
// У константу hero ми створюємо нову сутність
// const hero = new Character("Hero", 100, 100, 100);
const hero = new Character();
const enemy = new Character();
const superHero = new Character("SuperHero", 200, 200, 200);
const superEnemy = new Character("SuperEnemy", 150, 150, 150);

console.log(hero);

console.log(superHero);
console.log(superEnemy);

superHero.doDamage();
