let p = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(10)
    },2000);
});

p.then(function(result){
    console.log(result); 
    return result * 2;
}).then(function(result){
    console.log(result);
    return result * 3;
}).then(function(result){
    console.log(result);
    return result * 3;
});
console.log("hello");