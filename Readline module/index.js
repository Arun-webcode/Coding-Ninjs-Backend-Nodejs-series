// Import required module

const readline = require("readline");

const Solution = () => {
  // Write your code here
  const qinterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  qinterface.question("Enter the first number: ", (num1) => {
    qinterface.question("Enter the second number: ", (num2) => {
      let max = Math.max(Number(num1), Number(num2));
      console.log(`The maximum of the two number is: ${max}`);
      qinterface.close();
    });
  });
};

Solution();
module.exports = Solution;
