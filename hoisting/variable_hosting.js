/* console.log(declaredLater);

var declaredLater = "Defined";

console.log(declaredLater);
 */
//console.log(noSuchVariable);


var name = "Baggins";

(function () {
    console.log("Original name was " + name);
    var name = "Underhill";
    console.log("New name is " + name);
})();
