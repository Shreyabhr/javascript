var service = function(){
    var obj = {}
    console.log("service log");

    obj.doSomething1 = function(){
        console.log("doSomething1");
    }
    obj.doSomething2 = function(){
        console.log("doSomething2");
    }
    obj.doSomething3 = function(){
        console.log("doSomething3");
    }
    return obj;
}();//it will call

service.doSomething1();
service.doSomething2();
service.doSomething3();
service.setId(123);
service.setId(124);
console.log(service.getId());
console.log(service.obj)
