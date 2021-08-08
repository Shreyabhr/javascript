(function(){
    
    let input = document.querySelector("input");
    output = document.querySelector("output");
    output.innerHTML = input.value;
    input.addEventListener("change",function(){
        document.getElementById("button").innerHTML = "";
        output.innerHTML = input.value;
        createButtons(input.value);
    },false);


function createButtons(value){
    for(var i = 0; i < parseInt(value); i++){
        var button= document.createElement("button");
        button.setAttribute("id",i);
        button.appendChild(document.createTextNode(i));
        button.addEventListener("click",printButtonText);
        document.getElementById("button").appendChild(button);
    }
    

}

function printButtonText(e){
    //buttonClicked = e.target.id;
    console.log(e.target.id);

}
})();
