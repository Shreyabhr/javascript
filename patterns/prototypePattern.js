function Customer(id,name){
    this.name = name;
    this.id = id;
}

Customer.prototype.getDetails = function(){
    return "Name of customer is " + this.name + " ,id is " + this.id;
}

var c1 = new Customer(101,"abc");
var c2 = new Customer(102,"def");

console.log(c1);
console.log(c2);
console.log(c1.getDetails());
console.log(c2.getDetails());
console.log(c1.__proto__ == Customer.prototype);
console.log(c2.__proto__ == Customer.prototype);
console.log(c2.__proto__ == c1.__proto__);
console.log(Customer.prototype.__proto__ == Object.prototype);
console.log(Object.prototype.__proto__);

Object.prototype.foo = function(){
    return "I am foo";
}

console.log(c1.foo());