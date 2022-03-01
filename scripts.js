// name = 'Abigale'; // The browser hoisted the declaration for the varable name, then assigned it to the current name = defined
// var name;
// console.log(name); // Abigale

// name = "Abigale"; // Undefinded
// let name;
// console.log(name); // Can't acess varable before nameing it

// setName();
// function setName() {
//     var name = "Abigale";
//     console.log(name); // Abigale
// } 

// console.log("some text"); // 1st
// let avg = newFunction(8, 4);
// console.log("some text", avg); // 3rd
// function newFunction(a, b) { 
//     console.log("some text"); // 2nd
//     var answer = (a + b) / 2; 
//     return answer;
// }

// let fruits = [ "apple", "banana", "pear"]
// let favFruit; // print favFruit bc this is a globla varable
// function printFruits() {
//     let leastFav = fruits[1];
//     let favFruit = fruits[2]; //adding let will redefined favfruits =undefined
//     console.log(fruits[0]) // 1st //only defined
// // Nested printFavFruit w/i printFruit function
//     function printFavFruit() {
//     console.log(favFruit); //2nd
//     }
//     printFavFruit(); //redefineding the fuctions
    
// }
// console.log(leastFav)// undefined
// printFruits();

// hello()
// function hello(){
//     var myName = " Abigale"
//     console.log("Hello" + myName)
// }

let  alertFun() = function {
    alert("hello world")
}

alertFun()
