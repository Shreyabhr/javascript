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
            //addTime(newItem);
            //var time = moment().format('LTS'); 
            var time = moment().format('MMMM Do YYYY, h:mm:ss a');
            console.log(typeof(time));
            console.log(time);
            newItem.appendChild(time);
        }
    }

    /* function addTime(){
        var time = moment().startOf('hour').fromNow();
        newItem.appendChild(time);
    } */
})();