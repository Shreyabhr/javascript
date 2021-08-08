(function(){
    var ul = document.getElementById("list");
    var table = document.querySelector("table");
    var hierarchy = document.getElementById("list2");
    document.getElementById("hierarchy").addEventListener("click",function(){
        hierarchy.style.display = "block";
        table.style.display = "none";
    })


    document.getElementById("employee").addEventListener("click",function(){
        table.style.display = "block";
        hierarchy.style.display = "none";
    })

    var employeeData = function(id,name,designation,managerId,dob,salary,commission,departmentNo){
        employee = {};
        employee.id = id;
        employee.name = name;
        employee.designation = designation;
        employee.managerId = managerId;
        employee.dob = dob;
        employee.salary = salary;
        employee.commission = commission;
        employee.departmentNo = departmentNo;
        return employee;        
    }

    function readTextFile(file){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", file);
    xhr.addEventListener("load",function(){
        const file = xhr.responseText;
        getEmploeeDetails(file);
    });
    xhr.send();
 
}

readTextFile("https://swabhav-tech.firebaseapp.com/emp.txt");


function getEmploeeDetails(file){
    const lines = file.split("\n");
    const newArray = [];
    noDuplicates = [... new Set(lines)];
    for(var i = 0; i < noDuplicates.length - 1; i++){
        newArray.push(noDuplicates[i]);
    }
    filterData(newArray);

}

function filterData(newArray){
    for(var i = 0; i < newArray.length; i++ ){
        var employee = newArray[i].split(",");
        removeNull(employee);
 
    }
    displayEmployee();
}

const employeeList = []
function removeNull(employee){
    for(var i = 0; i < employee.length; i++){
        if(employee[i] == "NULL"){
            employee[i] = 0;
        }
    }
    employeeList.push(employeeData(employee[0],employee[1],employee[2],employee[3],employee[4],employee[5],employee[6],employee[7]));
}

function displayEmployee(){
    for(var i = 0; i < employeeList.length; i++){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(employeeList[i].name));
        ul.appendChild(li);
       
    }
    generateTable(employeeList);
    createTableHead(Object.keys(employeeList[0]));
    findRoot(employeeList);
}

function generateTable(employeeList){
    for(var i = 0; i < employeeList.length; i++){
        var row = table.insertRow();
        console.log(employeeList[i].name);
        for(key in employeeList[i]){
            var cell = row.insertCell();
            var text = document.createTextNode(employeeList[i][key]);
            //console.log(employeeList[i].name);
            cell.appendChild(text);
        }

    }
}

function findRoot(employeeList){
    console.log(employeeList)
    for(var i = 0; i < employeeList.length; i++){
        if(employeeList[i].managerId == 0){
            console.log(employeeList[i].name);
            var li = document.createElement("li")
            li.id = "root";
            li.appendChild(document.createTextNode(employeeList[i].name));
            hierarchy.appendChild(li);
            buildhierarchy(employeeList[i].id);
            break;
        }
    }
}


function buildhierarchy(manager){
    
    //document.getElementById("root").appendChild(document.createElement("ul"));
    //var innerli = document.createElement("li");
    //document.getElementById("root").appendChild(document.createElement("ul"));
    //hierarchy.appendChild(document.createElement("ul"));
    //var innerul = document.createElement("ul");
    for(var i = 0; i < employeeList.length; i++){
        if(employeeList[i].managerId == manager){
            console.log(employeeList[i].name);
            createLi(employeeList[i].name);          
            //var innerli = document.createElement("li");
            //innerli.appendChild(document.createTextNode(employeeList[i].name));    
            buildhierarchy(employeeList[i].id);
            //var innerul = document.createElement("ul");
            //innerul.appendChild(innerli);
            //document.getElementById("root").appendChild(innerul);


        }
    }
}

function createLi(){
    
}



/* function createStructure(employeeList){
    var parents = [];
    for(var i = 0; i < employeeList.length; i++){ 
        parents.push({root : employeeList[i].id, children: []});     
    }
    buildStructure(parents);

}

function buildStructure(parents){
    for(var i = 0; i < parents.length; i++){
        var childrens = findChildren(parents[i].root)
        if(childrens.length != 0){
            parents[i].children.push(childrens);
        }      
    }
    getHierarchy(parents);
}

function getHierarchy(parents){
    for(var i = 0; i < parents.length; i++){
        
        if(parents[i].children.length != 0){
            printHierarchy(parents[i].root,parents[i].children);
            //printHierarchy(parents[i].root);
        }
    }
}

function printHierarchy(parents){
    if(parent.managerId == 0){
        console.log(parent);
    }
    

}
 
function printHierarchy(parent,child){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(parent + "->"));
    for(var i = 0; i < child.length; i++){
        li.appendChild(document.createTextNode(child[i]));
    }
    hierarchy.appendChild(li);
}

function findChildren(parent){
    var childrens = [];
    for(var i = 0; i < employeeList.length; i++){
        if(parent == employeeList[i].managerId){
            childrens.push(employeeList[i].id);
        }
    }
    return childrens;

}*/

function  createTableHead(keys){
    let thead = table.createTHead();
    let row = thead.insertRow();
    for(var i = 0; i < keys.length; i++){
        let th = document.createElement("th");
        let text = document.createTextNode(keys[i]);
        th.appendChild(text);
        row.appendChild(th);
    }
}
 


})();

