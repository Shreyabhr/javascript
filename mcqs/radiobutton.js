/* (function(){
    //var div = document.getElementById("choices");
    var radiobox = document.createElement('input');
    var labelValue = document.createElement('label');
    radiobox.type = 'radio';
    radiobox.id = 'contact';
    radiobox.value = 'email';
    //radiobox.checked = true;
    labelValue.innerHTML = "hello";
    document.body.appendChild(labelValue);
    document.body.appendChild(radiobox);
    radiobox.addEventListener("click",function(){
        print(radiobox);
        document.getElementById("hi").innerHTML = "";
        sayHello();
    });

    function print(radiobox){
        console.log(radiobox.value);
    }

    function sayHello(){
        console.log("hello");
    }
    //var label = document.body.appendChild(labelValue);
    //var radio = document.body.appendChild(radiobox);
    //div.append(label);
    //div.append(radio);
})();
 */
var a = 25;
console.log(typeof(a));
