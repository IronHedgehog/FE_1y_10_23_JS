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

// const user1 = "author";

// const author = "author";
// const read_only = "user";
// const admin = "admin";

// switch (user1) {
//   case author:
//     console.log("Ти можеш додати якийсь контент");
//     break;
//   case read_only:
//     console.log("Ти можеш переглядати якийсь контент");
//     break;
//   case admin:
//     console.log("Ти можеш редагувати якийсь контент, модерувати сайт");
//     break;
//   default:
//     console.log(" Зарструйтесь, будь ласка");
//     break;
// }

// Питання по дз - розберем

// Додатки (error lens,toggle quotes,random everything,regexp snippet)

// Запам'ятайте 6 хибних (falsy) значень, які приводять до false в логічному перетворенні: 0, NaN, null, undefined, порожній рядок: "" або '', false. Абсолютно все інше приводиться до true.

// if (0 || NaN || null || undefined || "" || false) {
// } else {
// }

// Будь-який switch можна замінити на блок if elseif else (відпрацювати)

const user1 = "user";

const author = "author";
const read_only = "user";
const admin = "admin";

if (user1 === author) {
  console.log("Ти можеш додати якийсь контент");
} else if (user1 === read_only) {
  console.log("Ти можеш переглядати якийсь контент");
} else if (user1 === admin) {
  console.log("Ти адмін");
} else {
  console.log("Неіснуюча роль");
}

// Тернарний оператор (Скорочує синтаксис) (Потрібний для простих операцій)

const age1 = 17;

// age1 >= 18  - умова яка може справдитись а може і неспрвадитись
// ? - Ми запитує у JS чи умова вірно виконанана?
// Одразу після знаку питання ви пишите код який має відпрацювати якщо умова виконана (true)
//після коду ставимо двокрапку вона буде розділяти true та false
//після двокрапки записується реакція на false значення перевірки
const isAdult = age1 >= 18 ? true : false;

console.log(isAdult);
// Кахут

// Області бачення

const a = 2;

// const string = ;

const name = "Jean";
