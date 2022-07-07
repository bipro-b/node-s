// create basic server
const http = require("http");

/*http.createServer((req, res) => {
    res.write("<h1>Hello this is Bipro</h1>");
    res.end();
  }).listen(4500);
   */
// uing  normal  function
function dataControl(req, res) {
  res.write("<h1>Hello, This is Barai</h1>");
  res.end();
}
http.createServer(dataControl).listen(4500);

// using arrow function
/* 
function test(a) {
  return a * 10;
}
const test = (a) => a * 100; */
