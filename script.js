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
const obj2 = { ...obj1 }; // Копируем свойства из obj1 в новый объект obj2

console.log(obj2); // { name: 'Alice', age: 25 }
console.log(obj1 === obj2); // false (это разные объекты)
