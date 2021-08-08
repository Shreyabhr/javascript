/* 7698->7654,7499,7844,7900,7521
7788->7876
7782->7934
7902->7369
7566->7788,7902
7839->7698,7782,7566 */
array = [ {root: 7698, children : [7654,7499,7844,7900,7521]}, {root: 7788, children : [7876]},{root: 7782, children : [7934]},
{root: 7902, children : [7369]},{root: 7566, children : [7788,7902]},{root: 7839, children : [7698,7782,7566]}]

console.log(array.length)

for(var i = 0; i<array.length ; i++){
    console.log(array[i].root)
    for(child in array[i].children){
        console.log(array[i].children[child]);
        var childs = findIfHaveChildren(array[i].children[child]);
        
        if(childs != 0){
            console.log("child" + childs);
        }
    }

}

function findIfHaveChildren(parent){
    for(var i = 0; i<array.length ; i++){
        if(array[i].root == parent){
            //console.log(array[i].root)
            //console.log(parent)
            //return array[i].children;
            if(array[i].children.length != 0){
                return array[i].children;
            }
            
            //console.log(array[i].children.length);
            //return array[i].children;
        }
    }
    return 0;
}

