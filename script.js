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

function deepEqual(obj1, obj2) {
  // Если оба объекта идентичны по ссылке
  if (obj1 === obj2) return true;

  // Если один из объектов не является объектом или массивом
  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    typeof obj2 !== "object" ||
    obj2 === null
  ) {
    return false;
  }

  // Получаем ключи обоих объектов
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Если количество свойств объектов различается
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Рекурсивно сравниваем все свойства
  for (let key of keys1) {
    // Проверяем, существуют ли ключи в обоих объектах
    if (!keys2.includes(key)) {
      return false;
    }

    // Рекурсивное сравнение значений
    if (!deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

const obj1 = {
  name: "Alice",
  age: 25,
  address: { city: "New York", zip: "10001" },
};
const obj2 = {
  name: "Alice",
  age: 25,
  address: { city: "New York", zip: "10001" },
};
const obj3 = {
  name: "Bob",
  age: 30,
  address: { city: "Los Angeles", zip: "90001" },
};

console.log(deepEqual(obj1, obj2)); // true
console.log(deepEqual(obj1, obj3)); // false
