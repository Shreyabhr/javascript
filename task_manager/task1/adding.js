(function(){
    var task = document.getElementById("todoInput");
    var list = document.getElementById("todolist");

    task.addEventListener("keyup",function(event){
        if(event.key == "Enter" && task.value != ""){
            createLiElement(task.value);
        }
    })

    function createLiElement(task){
        var newItem = document.createElement("li");
        addTask(task,newItem);
        list.insertBefore(newItem,list.childNodes[0]);
        document.getElementById("todoInput").value = "";
    }
    
    function addTask(item,newItem){
        if(item != ""){
            var text = document.createTextNode(item);
            newItem.appendChild(text); 
            addTime(newItem);
        }
    }

    function addTime(newItem){
        var time = document.createTextNode(moment().format('MMMM Do YYYY, h:mm:ss a'));
        newItem.appendChild(time);
    }
})();