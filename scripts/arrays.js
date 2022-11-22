//Array vs an object
let myArr = ["Bartek", "Roland", "Olga"];
let myObj = {
  firstName: "Roland",
  lastName: "Nemec"
}

//You access array item by the number
console.log(myArr[0]); 
//You access object item by the name
console.log(myObj["firstName"]);

//looping through an array
for(let i = 0; i < myArr.length; i++ ){
  console.log(myArr[i]);
}