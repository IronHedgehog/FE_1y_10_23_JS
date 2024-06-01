//1
let result = 5+5+'5'
console.log(result);
//2
let email = 'google@gmail.com'
console.log(email.length)
console.log(email.includes("@"))
//3
let My = "My"
let name = "name"
let is = "is"
let fullName = My + " " + name + " " + is
console.log(fullName + " " + "Victor");
//4
let userName = prompt("Введіть ім'я:")
let payment = "300грн"
alert("Дякуємо," + " " + userName + "!" + " " + "До сплати" + " " + payment)

//Додаткове дз:
//1
const age = "16";
const greetings = `Мені ${age} років`;
console. log(greetings);
//2
let myName = "Олексій";
let myAge = "16";
let myCity = "Кропивницький";
let bio = `Привіт, мене звати ${myName}, мені ${myAge} років, і я живу в місті ${myCity}`
console.log(bio);
//3
let num1 = 4;
let num2 = 10;
let numResult = `Сума чисел ${num1} і ${num2} дорівнює ${num1 + num2}`
console.log(numResult)
//4
let text = "JavaScript isn't Java";
let index = text.indexOf("JavaScript");
console.log(`${index}`)
if (index !== -1) {
    let newText = text.replace("JavaScript", "JS");
    console.log(`${newText}`);
  }
//5
let textNum = "London is the capital of Great Britain";
console.log(textNum) 
console.log(textNum.length)
console.log(`${textNum.substring(0, 3)}`);
console.log(`${textNum.substring(textNum.length -3)}`)
console.log(textNum.toUpperCase())
console.log(textNum.toLowerCase())
//6
let radius = 10;
let pi = 3.14;
let circleInfo = `Коло з радіусом ${radius} має площу ${pi*radius^2}`
console.log(circleInfo)