/*const myArr = ['Pussy', 'Cat', 'Kocur']; 
for (const element of myArr){
  console.log(element);
}

function toUpper (string){
  return string.toUpperCase();
}

const myList = ['get', 'the', 'f'];
const upperMyList = myList.map(toUpper);
console.log(upperMyList);

const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];
const filteredCats = cats.filter((cat) => cat.startsWith('L'));
console.log(filteredCats);

for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}

let num = 0;
while (num <= 5){
  console.log(num);
  num++
}

let testNum = 0;
do {
  console.log('Hello world');
}
while (testNum != 0)
*/

//active learning
const output = document.querySelector('.output');
for(let i = 10; i >= 0; i--){
  const para = document.createElement('p');
  output.appendChild(para);
  if(i === 10){
    para.textContent = `Countdown ${i}`;
  }
  else if(i === 0){
    para.textContent = `Blast off!`;
  }
  else {
    para.textContent = i;
  }
}

//active learning 2
const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// loop starts here
for(const person of people){
  if(person === 'Phil' || person === 'Lola'){
    refused.textContent += `${person}, `;
    refused.textContent.slice(refused.textContent.length - 1);
  }
  else {
    admitted.textContent += `${person}, `;
  }
}

// refused.textContent += ;
// admitted.textContent += ;


