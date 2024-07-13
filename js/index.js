// join- split

const message =
  " Lorem ipsum dolor sit amet consectetur adipisicing elit . Eum nam error rerum tempora rem repellat hic, ducimus distinctio impedit dolores id fugiat incidunt officiis tenetur odit harum culpa repudiandae quibusdam sequi, molestias, perspiciatis et eveniet obcaecati nemo? Pariatur, esse qui porro aliquid eum dolorum asperiores non accusantium alias nam quaerat natus soluta delectus iusto tempore eius itaque, unde aspernatur officia commodi corrupti ea odio ducimus debitis. Optio minima odit fugiat eius sit omnis dicta vel ipsum rem, doloremque deleniti officia tempora corrupti explicabo tenetur assumenda aspernatur pariatur nostrum suscipit iste facilis, ipsa amet! Nostrum inventore magni unde molestias in accusamus.";
// TODO: regexp на розділові знаки
// split - розділити
// Спліт розділяє строку та збирає значення в масив
const arr = message.split(".");
// join -  збирає елементи масиву у одну строку
console.log(arr.join(" "));

const arr1 = [1, 2, 6, 4, , 4, 5, 10, 5, 6];

// includes - перевіряє чи є елемент в масиві та повертає буль
console.log(arr1.includes(10));
// indexOf -  повертає індекс першого співпадіння
console.log(arr1.indexOf(6));

const arr2 = [1, 2, 3, 4, 56, 10, 7, 8, 9];
//метод push додає елементи в кінець масиву, повератає довжина доданого елементу(останнього)
console.log(arr2.push(20));

console.log(arr2);
