//promisyfing a function - returns a prmoise
function doSomething(input){   ///returns a prmoise

    return new Promise(function(resolve , reject){
        console.log("inside promise");
        var result = Math.random() * input;
        console.log(result);
        if(result > 5){
            resolve({sucess : result});
            return;
        }
        reject({error : "somthing went wrong"});

    });

}


doSomething(10).then(function(result){
    console.log("sucess happened", result);
    })
    .catch(function(error){
        console.log("error happened",error)
    });
console.log("End of main");

