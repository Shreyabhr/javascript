function isOdd(no){
    return no % 2 != 0;
}

function greaterThan25(no){
    return no>25;
}

const numbers = [34,10 ,67, 25 ];

function filterNumbers(cars,myCallback){
    const array = []; 
    for(i = 0; i < cars.length; i++){
        if(myCallback(cars[i])){
            array.push(cars[i]);
        }
    }
    return array;
    
}

console.log(filterNumbers(numbers,isOdd));
console.log(filterNumbers(numbers,greaterThan25));