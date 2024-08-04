const kryzka = {
  _color: ["white", "blue"],
  $volume: "500ml",
};

const figurka = {
  size: {
    small: "250mm",
    medium: "500mm",
    big: "1m",
  },
};

const poster = {};

// Додавання властивостей відбувається через крапку
poster.material = "paper";

console.log(poster);

// Отримати значення з обʼєкту
console.log(poster.material);
console.log((poster.size = "1m"));
console.log(poster["material"]);
console.log(poster);

// Видалення властивостей
delete poster.size;

// Заміна властивостей

const figurk = {
  size: "250mm",
};

figurk.size = "2m";

console.log(figurk);

console.log(poster);

const objArr = [
  { material: "paper" },
  { material: "iron" },
  { material: "metal" },
  { material: "paper" },
  { material: "iron" },
  { material: "metal" },
  { material: "paper" },
  { material: "iron" },
  { material: "metal" },
  { material: "paper" },
  { material: "iron" },
  { material: "metal" },
  { material: "paper" },
  { material: "iron" },
  { material: "metal" },
  { material: "paper" },
  { material: "iron" },
  { material: "metal" },
  { material: "paper" },
  { material: "iron" },
  { material: "metal" },
  { material: "paper" },
  { material: "iron" },
  { material: "metal" },
  { material: "paper" },
  { material: "iron" },
  { material: "metal" },
  { material: "paper" },
  { material: "iron" },
  { material: "metal" },
];

function filter(objArr, material) {
  const filteredArr = [];
  for (const obj of objArr) {
    if (obj.material === material) {
      filteredArr.push(obj);
    }
  }
  return filteredArr;
}

console.log(filter(objArr, "paper"));

// short properties

const email = "asd@asd.com";
const password = "qwerty12345@&";
const userName = "QWERTY";

const user = {
  email: email,
  password: password,
  userName: userName,
};

const user1 = {
  email,
  password,
  userName,
  registration: function () {
    // this - це контекст
    console.log(this);
    console.log(user1.email, this.password, this.userName);
  },
  goWalk: function () {
    console.log("Я пішов гулять");
  },
  up: function () {
    console.log("up");
  },
  changeUserName: function (newUserName) {
    if (email.length <= 6) {
      return false;
    }
    this.userName = newUserName;
  },
};

user1.registration();
user1.goWalk();
user1.changeUserName("Petro");

console.log(user1);

console.log(user);
console.log(user1);

const key = "shoc";

const cosmetics = {
  [key]: "shoci",
};

console.log(cosmetics);
