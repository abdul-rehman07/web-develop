console.log("Function in JS");

function greet(name, value= "well come ") {
    console.log(value  + " " +name );
    console.log(name + " is a Good boy");
    
}

function sum(a,b,c) {
    let d = a +b+c;
    return d;
    
}


let name = "hunny";
let name1 = "bunny";
let name2 = "sunny";
let name3 = "lunny";
let value1 = "Good Morning";
greet(name, value1);
greet(name1, value1);
greet(name2, value1);
greet(name3);

let myvar = sum(1,2,3);
console.log(myvar);

// console.log(name + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");
