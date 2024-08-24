// НЕ ПРАЦЮЄ
const user = {
  name: "Mango",
  age: 20,
  // hobby: "html",
  // premium: true,
};

// premium: newPremium - означає, що ви переіменвали змінну

//  = встановлення значення за замовчуванням ( це є значення за замовчуванням - коли такого поля не існує в обʼєкті який ви деструктуризуєте)

const {
  name,
  age,
  hobby: newHobby = (user.hobby = "shoc"),
  premium: newPremium = false,
  mood = "happy",
} = user;

console.log(name, age, newHobby, newPremium, mood);

// const { name: name2, age: age2 } = { name: "Mango", age: 2 };

const anyUser = { name1: "Mango", age1: 2 };

const { name1, age1: age2 } = anyUser;

console.log(name1, age2);

const numbers = [1, 2, 3, 4, 5];

const [one, two, three, ...rest] = numbers;

console.log(one, two, three, rest);
