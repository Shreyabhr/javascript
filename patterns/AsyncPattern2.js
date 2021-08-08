function doSomething(input, successCallBackFn, errorCallBackFn){
    var result = Math.floor(Math.random() * (1 - 10) + 10) * input;
    console.log(result);
    if(result > 5){
        successCallBackFn ({success : result});
        return;
    }
    errorCallBackFn ({error: "something is wrong"});

}

doSomething(10, function(data){
                console.log("success",data)
                },function(err){
                    console.log("error", err)
                }
);

console.log("End of main");