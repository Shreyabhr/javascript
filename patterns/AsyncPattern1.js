function doSomething(input){
    var result = Math.floor(Math.random() * (1 - 10) + 10) * input;
    console.log(result);
    if(result > 5){
        return {sucess :result};
    }
    return {error: "something is wrong"};

}
console.log(doSomething(10));
console.log("End of main");