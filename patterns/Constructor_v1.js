function Customer(id,name){
    console.log(this);
    var _id, _name;

    if(_id > 0){
        _id = id;
    }

    if(name.length > 0){
        _name = name;
    }

    this.foo = "I am a foo";

    this.setName = function(name){
        if(name.length > 0){
            _name = name;
        }
    }

    this.getName = function(){
        return _name;
    }

    this.getId = function(){
        return _id;
    }

}


var c1 = new Customer(10,"abc");
var c2 = new Customer(11,"def");
console.log(c1);
console.log({c1});
c1.setName("shreya");
console.log({c1});
console.log(c1.getName());
console.log(c1.foo);
console.log({c1});