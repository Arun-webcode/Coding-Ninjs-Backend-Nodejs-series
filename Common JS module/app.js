// Note:  Please do not change the prewritten code

// import the required module here
const maths = require("./math.js");

const Solution = () => {
  const nums = [1, 2, 3, 4, 5];
  // write your code here to Display the results of the calculations on the console.
  console.log(`The sum is ${maths.sum(nums)}`);
  console.log(`The sum is ${maths.mean(nums)}`);
};
Solution();
module.exports = Solution;
