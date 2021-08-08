function doSomething(input, successCallBackFn, errorCallBackFn){
    setTimeout(function(){
        var result = Math.floor(Math.random() * (1 - 10) + 10) * input;
        console.log(result);
        if(result > 5){
            successCallBackFn ({success : result});
            return;
        }
        errorCallBackFn({error: "something is wrong"});

    },0);
    

}

doSomething(10, function(data){
                console.log("success",data)
                },function(err){
                    console.log("error", err)
                }
);

console.log("End of main");

/* //console.log(numbersApiService.fetchFacts(10));  -- will be defered execution
numbersApiService.fetchFacts(10,function(result){

});

console.log("end"); */

