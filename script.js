// const user = {
//   name: "ALex",
//   age: 28,
// };

// console.log("isDeveloper" in user);

const nums = {
  name: "Alex",
  2: "Second",
  1: "First",
  3: "Third",
  age: 28,
};

for (const num in nums) {
  console.log(nums[num]);
}

console.log(nums);
