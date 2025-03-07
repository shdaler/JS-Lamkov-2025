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

const globalMessage = "hi";

function logMessage(message, count = 5) {
  const messageFormatted = `(((${message})))`;

  for (let i = 2; i < count; i++) {
    console.log(messageFormatted);
  }
}

logMessage(globalMessage);
