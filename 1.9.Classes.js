//Constructor-based classes
function Person(first, last){
  this.first = first;
  this.last = last;
}
Person.prototype.getInitials = function() {
  return this.first + this.last;
}
Person.checkName = function() {
  return "checked name";
}

var p1 = new Person("a", "b");

p1.getInitials(); // метод экземпляра
//p1.checkName(); //error, метод класса (static)

Person.checkName() //

//Factory-based classes

