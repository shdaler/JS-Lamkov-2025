// console.log("loop now starting...");

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log(i);
// }

// console.log(".... loop is over!");

// function logHello() {
//   console.log("Hello");
// }

// logHello();

// function logMessage(message, count) {
//   for (let i = 0; i < count; i++) {
//     console.log(message);
//   }
// }

// logMessage("hello", 4);
// logMessage("bye", 2);

// const globalMessage = "hi";

// function logMessage(message = "wow", count = 5) {
//   const messageFormatted = `(((${message})))`;

//   for (let i = 0; i < count; i++) {
//     console.log(messageFormatted);
//   }
// }

// logMessage();

// function sumFiveNumbers(num5, num1 = 100, num2 = 200, num3 = 300, num4 = 400) {
//   const sum = num1 + num2 + num3 + num4 + num5;

//   console.log(`sum is ${sum}`);
// }

// sumFiveNumbers(1000);

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(333, 111));

// function getSecretMessage(name) {
//   if (!name) return;
//   return `I dont know who are you! Are you ${name}?`;
// }

// console.log(getSecretMessage("Ivan"));

// const validate = (hasAccess) => {
//   return hasAccess
//     ? () => console.log("Доступ разрешен :)")
//     : () => console.log("Доступ запрещен :(");
// };

// const logMessage = validate(false);

// logMessage();

// const alertWarn = () => {
//   alert("Some text");
// };

// const getPi = () => {
//   return 3.14;
// };

// alertWarn();
// console.log(getPi());

const obj = { ["temp${2*2}"]: true };

console.log(obj);
