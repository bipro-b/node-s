// import { x } from "./app";
/* const app = require("./app");
console.log("sub");
console.warn(3 + 4 + 5);
console.log(app);
console.log(app.x);
console.log(app.z()); */

// const arr = [2, 3, 4, , 5, 56, 7, 8];
// filter works on array
/* arr.filter((item) => {
  console.log(item);
});

let result = arr.filter((item) => {
  return item > 4;
});
console.log(result); */

// core module of node.js
const fs = require("fs"); // non global
// fs, buffer,HTTP
console.log("Code step by step"); // global
fs.writeFileSync("Hello2.txt", "Like and Subscribe");

//check directory and filenae
console.log("->>", __dirname);
console.log("-->>", __filename);
