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

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
document.getElementById("demo-2").innerHTML = fruits.join(" * ");

//remove the last element from an array 
let remArr = ['one', 'two', 'three'];
remArr.pop();
remArr.forEach(element => console.log(element));
remArr.push('four');
console.log(remArr[2]);
remArr.unshift('zero');
console.log(remArr[0]);
remArr.shift();
console.log(remArr[0]);

//append a new element 
remArr[remArr.length] = 'five';
remArr.forEach(element => console.log(element));

//adding two arrays together
const listOne = ['Czechia', 'Poland', 'Germany'];
const listTwo = ['Slovakia', 'Lithuania', 'France'];
const sumOfLists = listOne.concat(listTwo);
sumOfLists.forEach(element => {
  console.log(element);
});

const spliceMyArr = ['powder', 'sugar', 'milk', 'salt'];
spliceMyArr.splice(2, 0, 'burger', 'meat');
spliceMyArr.forEach(element => console.log(element));

//sort an array alphabetically
spliceMyArr.sort();
spliceMyArr.forEach(element => console.log(element));