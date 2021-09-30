//2 task 

for (let i = 1; i <= 99; i++) {
  if (i % 3 === 0) {
    console.log('Open');
  } else if (i % 7 === 0) {
    console.log('Source');
  } else if (i % 3 && i % 7) {
    console.log('OpenSource');
  } else {
    console.log(i)
  }
}


//3 task
let container = document.querySelector('.container');
let children = Array.from(container.children);
console.log(children);



// 4 task 
const row = ['1', 'a', '25', '13.1'];
let newRow = [];
let sum = 0;
row.forEach(element => {
  if(!isNaN(element) && element % 1 === 0) {
    newRow.push(+element)
  };
});

for(let i = 0; i < newRow.length; i++){
      sum += newRow[i];
    }
console.log(sum);



// 5 task
const URL = "https://jsonplaceholder.typicode.com/posts";
let data;

fetch(URL)
	.then(function (resp) {
		return resp.json();
	})
  .then(function (finalResp) {
		data = finalResp;
    let necessaryObj = data.find(obj => obj.id === 5);
    // return necessaryObj;
    console.log(necessaryObj)
	})



// 6 task

const regExp = /Softeq.*#rules|#rules.*Softeq/;
const str = 'Softeq company has some special #rules';
const str1 = 'some special #rules are in Softeq company';

const result = str.match(regExp);
console.log(result);
const result1 = str1.match(regExp);
console.log(result1);



// 7 task 
let alphabet = [...Array(26).keys()].map(i => String.fromCharCode(i + 65));
console.log(alphabet);


// 8 task 
const number = Math.ceil(Math.random() * 1000000);
let guessCount = 0;
function verify() {
  const guess = Number(this.elements.guess.value),
        output = document.getElementById('output');
  if(guessCount < 50) {
    if (isNaN(guess)) {
        output.innerHTML = 'Enter a number.';
    } else if (number === guess) {
        output.innerHTML = `0! ${guessCount} tries`;
    } else if (guess > number) {
        output.innerHTML = '1';
        guessCount++
    } else if (guess < number) {
        output.innerHTML = '-1';
        guessCount++
    };
    return false;
  } else {
      output.innerHTML = `You are loose! ${guessCount} tries are ended.`;
      document.querySelector(".disabled").setAttribute('disabled', true);
      guessCount = 0;
      return false;
    };
};
 
document.getElementById('guessNumber').onsubmit = verify;




