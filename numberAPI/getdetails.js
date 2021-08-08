(function(){
    var list = document.getElementById("search");
    searches = {};
    listOfSearches = [];
    loadLocalStorage();
    var num = document.getElementById("no");

    num.addEventListener("keyup",function(event){
        if(event.key == "Enter" && num.value != ""){
            getInfo();
        }
    });
   
    function getInfo(){
        var number = document.getElementById("no").value;
        /* if(typeof(number) != number){
            alert("enter a number");
            document.getElementById("no").value = "";
            return;
        } */
        var xhr = new XMLHttpRequest();
        var xhr1= new XMLHttpRequest();

        xhr.addEventListener("load",function(){
            console.log(xhr.responseText);
            var msg = xhr.responseText;
            document.getElementById("detail").innerHTML = msg;
            colorText(number);
            var id = Date.now();
            searches.id = id;
            searches.detail = msg;
            searches.time = moment().format('MMMM Do YYYY, h:mm:ss a');
            listOfSearches.push(searches);
            loadInLocalStorage(id);
            createLiElement(id);
        });

        xhr1.addEventListener("load",function(){
            var msg2 = xhr1.responseText;
            document.getElementById("more").innerHTML = msg2;
        });
    
        xhr.open("GET","http://numbersapi.com/"+number);
        xhr.send();
        xhr1.open("GET","http://numbersapi.com/"+number+"/math");
        xhr1.send();
        console.log("end of program");  
    }
    
    function colorText(number){
        if(number % 2 == 0){
            document.getElementById("detail").style.color = "red";
            return;
        }
        document.getElementById("detail").style.color = "blue";
    }
    
    function createLiElement(id){
        var newSearch = document.createElement("li");
        newSearch.appendChild(document.createTextNode(searches.detail));
        list.appendChild(newSearch);
        addTime(newSearch, id);
        document.getElementById("no").value = "";
    }
    
    function addTime(newSearch, id){
        var time = document.createTextNode("\t"+ searches.time);
        newSearch.appendChild(time);
        addDeleteButton(newSearch,id);
    }
    
    function addDeleteButton(newSearch,id){
        var button = document.createElement("button");
        button.innerHTML = "X";
        button.id = id;  
        console.log(button.id);
        button.addEventListener("click",function(e){
            button.parentElement.remove();
            deleteFromLocalStorage(e.target.id);
        });
        newSearch.appendChild(button);
    }
    
    function deleteFromLocalStorage(buttonId){
        if(localStorage.getItem(buttonId) != null ){
            console.log(buttonId);
            localStorage.removeItem(buttonId);
        }
    }
    
    function loadInLocalStorage(id){
        localStorage.setItem(id,JSON.stringify(searches));
    }
    
    function loadLocalStorage(){
        for(var i = 0; i < localStorage.length; i++){
            var key = localStorage.key(i);
            var data = JSON.parse(localStorage.getItem(key));
            addTaskFromLocalStorage(data.detail,data.time,key);
        }
    }
    
    function addTaskFromLocalStorage(description,time,id){
        var LocalItem = document.createElement("li");
        LocalItem.appendChild(document.createTextNode(description));
        list.appendChild(LocalItem);
        LocalItem.appendChild(document.createTextNode("\t"+ time));
        addDeleteButton(LocalItem,id);
    }
})();
