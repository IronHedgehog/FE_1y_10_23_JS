// якщо щось трапилось я зроблю те що ти написав у фігурних дужках
// якщо в круглих дужках буде true то відпрацює те шо ви написали у фігурних дужках далі

//якщо в круглих дужках ми отримуємо false то управління переходить в блок else якщо його немає то if не виконується і код продовжує виконуватись

const age = 15;

const auth = true;

// && - Логічний оператор І, мають виконуватись обидві вимоги

// || - логічний оператор АБО, має виконатись хоча б одна умова

//  ! - Логічне НЕ

console.log(true && true && false);
console.log(false || true || true || false);
console.log((false && true) || true || false);

if (age >= 18 || auth === true) {
  console.log("робе");
} else {
  console.log("не робе");
}

// Будь-який switch можна замінити на блок if elseif else
//switch - використовуємо в рідких випадках

const user = 51;

const silver = 100;
const gold = 200;
const diamond = 500;
const bronze = 50;

// case - це якась подія

switch (user) {
  case bronze:
    console.log("bronze підписка");
    break;
  case silver:
    console.log("silver підписка");
    break;
  case gold:
    console.log("gold підписка");
    break;
  case diamond:
    console.log("diamond підписка");
    break;
  default:
    console.log("Купіть підписку");
    break;
}

console.log("шось далі");

const user1 = "author";

const author = "author";
const read_only = "user";
const admin = "admin";

switch (user1) {
  case author:
    console.log("Ти можеш додати якийсь контент");
    break;
  case read_only:
    console.log("Ти можеш переглядати якийсь контент");
    break;
  case admin:
    console.log("Ти можеш редагувати якийсь контент, модерувати сайт");
    break;
  default:
    console.log(" Зарструйтесь, будь ласка");
    break;
}
