(function(){
    tasks = {}
    //deletedTasks = {};
    listOfTasks = [];
    var task = document.getElementById("todoInput");
    var list = document.getElementById("todolist");

    loadLocalStorage();

    task.addEventListener("keyup",function(event){
        if(event.key == "Enter" && task.value != ""){
            createLiElement(task.value);
        }
    })

    function createLiElement(task){
        var newItem = document.createElement("li");
        tasks.id = Date.now();
        tasks.details = task;
        tasks.isDeleted = false;
        listOfTasks.push(tasks);
        addTask(task,newItem,tasks.id);
        list.insertBefore(newItem,list.childNodes[0]);
        addToLocalStorage();
        document.getElementById("todoInput").value = "";
    }

    function addToLocalStorage(){
        localStorage.setItem(tasks.id, JSON.stringify(tasks));
    }
    
    function addTask(task,newItem,id){
        var text = document.createTextNode(task);
        newItem.appendChild(text); 
        addButton(newItem,tasks.id); 
    }
    
    function addButton(newItem,id){
        var button = document.createElement("button");
        button.innerHTML = "X";
        button.id = id;  
        button.addEventListener("click",function(){
            button.parentElement.remove();
            deleteFromLocalStorage(button.id);  
        });
        newItem.appendChild(button);
    }

    function deleteFromLocalStorage(buttonId){
        if(localStorage.getItem(buttonId) != null ){
            localStorage.removeItem(buttonId);
        }


    }

    function loadLocalStorage(){
        for(var i = 0; i < localStorage.length; i++){
            var key = localStorage.key(i);
            var fgh = JSON.parse(localStorage.getItem(key));
            if(fgh.isDeleted != true){
                addTaskFromLocalStorage(fgh.details,fgh.id);
            } 
        }
    }

    function addTaskFromLocalStorage(task,id){
        var LocalItem = document.createElement("li");
        addTask(task,LocalItem,id);
        var localList = document.getElementById("todolist");
        localList.appendChild(LocalItem);
    }
})();