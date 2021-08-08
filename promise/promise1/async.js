(function(){
    var worker = new Worker("webworker.js");

    document.getElementById("async").addEventListener("click",function(){
        worker.postMessage("async");
       0// printHadler();
    });

    /* function printHadler(){
        console.log("hello");
        postMessage("hello");
    } */
    
})();