// const user = {
//   name: "ALex",
//   age: 28,
// };

// console.log("isDeveloper" in user);

// const nums = {
//   name: "Alex",
//   2: "Second",
//   1: "First",
//   3: "Third",
//   age: 28,
// };

// for (const num in nums) {
//   console.log(nums[num]);
// }

// console.log(nums);

// const obj1 = { name: 'Alice', age: 25 };
// const obj2 = { ...obj1 }; // Копируем свойства из obj1 в новый объект obj2

// console.log(obj2); // { name: 'Alice', age: 25 }
// console.log(obj1 === obj2); // false (это разные объекты)

// const obj1 = { user: { name: "Alice" } };
// const obj2 = { user: { age: 25 } };

// const merged = { ...obj1, ...obj2 };
// console.log(merged);
// { user: { age: 25 } } — name потерялся!

// const user = {
//   name: "Alice",
//   age: 26,
//   city: "New York",
// };

// const { name, ...rest } = user;

// console.log(name); // 'Alice'
// console.log(rest); // { age: 25, city: 'New York' }

// const user = {
//   name: "Alex",
//   age: 28,
//   logThis: function () {
//     console.log("this в теле метода user:", this);
//   },
// };

// user.logThis();

// const user1 = { name: "Alex" };
// const user2 = { name: "John" };

// function logInfo() {
//   console.log("this", this);
//   console.log("this.name", this.name);
// }

// logInfo();

// user1.logName = logInfo;
// user2.logName = logInfo;

// user1.logName();
// user2.logName();

// const calculator = {
//   read() {
//     this.a = Number(prompt("Введите первое число"));
//     this.b = Number(prompt("Введите второе число"));
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
// };

// calculator.read();

// console.log("calculator:", calculator);
// console.log("Summa:", calculator.sum());
// console.log("Proizvedenie:", calculator.mul());

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() {
//     //pokazivaet tekushuyu stupen'
//     console.log("Tekushaya stupen'ka", this.step);
//     return this;
//   },
// };

// ladder.up().up().down().showStep().down().showStep();

// const counter = {
//   value: 0,
//   increment: function () {
//     this.value++;
//   },
//   show: function () {
//     console.log(this.value);
//   },
// };

// counter.increment();
// counter.increment();
// counter.show();

// const incrementFn = counter.increment.bind(counter);
// incrementFn();
// counter.show();

// const price = 99.555;

// console.log("Okruglenie do 0 znakov posle zapyatoy:", price.toFixed());

// console.log("okruglenie do 1 znaka posle zapyatoy:", price.toFixed(1));

// console.log("okruglenie do 2 znakov posle zapyatoy:", price.toFixed(2));

// console.log((5.001).toFixed(2));

// const num = 100.055;

// console.log(num.toPrecision(4));
// console.log(num.toFixed(4));

// const num = 100;
// const numAsString = num.toString();

// console.log("Chislo:", num);
// console.log("Chislo v vide stroki:", numAsString);

// console.log(typeof num);
// console.log(typeof numAsString);

// const num = 10;

// console.log(" Chislo ${num} v dvoichnoy sisteme schisleniya:", num.toString(2));

// console.log("Sluchaynoe chislo:", Math.random());

// console.log(Math.abs(-1));
// console.log(Math.abs(-2));
// console.log(Math.abs(-100));
// console.log(Math.abs(-1000));

// console.log(Math.pow(2, 10));

// const nums = [1, 2, 3, -5, 10, 111, 100];

// console.log(Math.min(...nums));

// console.log(Math.trunc(3.49));

// const numberAsString = "100.5px";

// console.log(parseInt(numberAsString));
// console.log(parseFloat(numberAsString));

// const name = "Alex";

// console.log(name.at(0));
// console.log(name.at(1));
// console.log(name.at(-1));

// const text = "SiMpLe";

// console.log(text.toLowerCase());
// console.log(text.toUpperCase());

// const message = "     Hi!    ";

// console.log(`String "${message}" has length ${message.length} symbols`);

// const messageFormatted = message.trim();

// console.log(`
//   Message "${messageFormatted}" has length ${messageFormatted.length} symbols`);

// const message = "Hello";

// console.log(message.indexOf("el", 5));
// console.log(message.includes("el", 5));
// console.log(message.startsWith("He", 4));
// console.log(message.endsWith("lo", 5));
// console.log(message.endsWith("lo", message.length));

// const str = "JavaScript";

// console.log(str.substring(0, 4));
// console.log(str.slice(0, 4));
// console.log(str.slice(-6));

// const message = "I learn Java, and JAva is cool";

// console.log(message.replace(/Java/gi, "VS"));

// const str = "+1 234 567 890";

// console.log(str.replace(/\d/g, "#"));

// const str = "Hello, world";

// console.log(str.split(""));

// let message = " Hello!   ";

// console.log(`
//   Message before:
//   "${message}"`);

// message = message.trim().toUpperCase().slice(0, 4);

// console.log(`
//   Message after:
//   "${message}"`);

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(matrix[1][2]);

// const arr = ["hi", 100, true];

// console.log("arr before:", arr);

// arr[0] = "bye";
// arr[1] = "222";
// arr[2] = "false";
// arr[3] = "1000";
// arr[1000] = "ok";

// console.log("arr after:", arr);

// console.log(arr.length);

// const letters = ["a", "b", "c"];

// console.log("letters before:", letters);

// letters.pop();

// console.log("letters after:", letters);

// const arr1 = ["a", "b", "c"];
// const arr2 = ["a", "b", "c"];

// const areArrayEqual = (array1, array2) => {
//   if (array1.length !== array2.length) {
//     return false;
//   }

//   for (let i = 0; i < array1.length; i++) {
//     const value1 = array1[i];
//     const value2 = array2[i];

//     if (value1 !== value2) {
//       return false;
//     }
//   }

//   return true;
// };

// console.log(areArrayEqual(arr1, arr2));

// const data = ["Alex", 28];

// const [age, name] = data;

// console.log("name:", name);
// console.log("age:", age);

// const letters = ["A", "B", "C", "D", "E"];

// letters.forEach((letter) => {
//   console.log(letter);
// });
