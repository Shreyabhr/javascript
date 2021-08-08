(function(){

    var hello = document.getElementById("hello").addEventListener("click",function(){
        alert("hello");
    });
    
    var sync = document.getElementById("sync").addEventListener("click",function(){
        syncHandler();
    });
    
    function syncHandler(){
        while(true){
            console.log("sync");
        }
    }
    

})();

