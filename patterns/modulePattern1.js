function makeCustomer(){
    var _id, _name;
    var customer = {};

    customer.setId = function(id){
        _id = id;
    }

    customer.setName = function(name){
        _name = name;
    }

    customer.getDetails = function(){
        return "Name is " + _name + " id is " +_id;
    }

    return customer;
}



var c1 = makeCustomer();
var c1 = makeCustomer();
c1.setName("def");
c1.setId(100);
c1.setName("abc");
console.log(c1.getDetails());
