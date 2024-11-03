function init() {
  var name = "Mozilla"; 
  function displayName() {
    console.log(name);
  }
  return displayName
}
var a=init();

console.log(a)
a()
