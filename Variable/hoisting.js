// Why the Global x is Not Used: Since var x inside the function creates a new, local x, the global x is ignored within the scope of function a. This means the function only works with the local x, making the global x effectively inaccessible within a.

var x = 1;        // Declares and initializes a global variable x
a();              // Calls function a
console.log(x);   // Logs the global x after calling a

function a() {
  console.log("before", x); // Logs the global x (1) since no local x is declared
  console.log("after", x);  // Logs the same global x (1) again
}


var x = 1;        // Declares and initializes a global variable x
a();              // Calls function a
console.log(x);   // Logs the global x after calling a

function a() {
  console.log("before", x); // Logs `undefined` due to hoisting
  var x = 10;               // Declares a local variable x in function a
  console.log("after", x);  // Logs the local x (10)
}

