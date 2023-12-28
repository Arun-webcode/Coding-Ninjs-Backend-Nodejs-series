// app.js - our main application file
// const math = require("./math.js");
import * as math from "./math";

const nums = [1, 2, 3, 4, 5];
console.log(`The sum is ${math.sum(nums)}`);
console.log(`The mean is ${math.mean(nums)}`);
