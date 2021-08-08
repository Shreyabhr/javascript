var num = document.getElementById("no");

num.addEventListener("keyup", function(event){
    if(event.key == "Enter" && num.value != ""){
        getFacts(num.value).then(function(fact){
            document.getElementById("detail").innerHTML = fact.success;
            })
            .catch(function(error){
                console.log("error happened",error);
            }); 
    }
});

function getFacts(number){
    return new Promise(function(resolve , reject){
        var xhr = new XMLHttpRequest();
        xhr.open("GET","http://numbersapi.com/"+number);      
        xhr.addEventListener("load",function(){
            var msg = xhr.responseText;
            if(msg != ""){
                console.log(msg);
                resolve ({success : msg});
                return;
            }
            reject ({error : "not available"});
        });
        xhr.send();
        
    });
    
}

