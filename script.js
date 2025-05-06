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

const name = "Alex";

console.log(name[name.length - 1]);
