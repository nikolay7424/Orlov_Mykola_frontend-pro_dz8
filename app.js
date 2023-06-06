// 1
let numbers = [];
for(let i = 20; i <= 30; i+= 0.5) {
  numbers.push(i);
}
console.log(numbers.join(', '));

// 2
let uahValues = [];
for(let i = 10; i <= 100; i+= 10) {
  uahValues.push(i * 40);
}
console.log(uahValues.join(', '));

// 3
const number = 256;
let resultNumbers = [];
for(let i = 1; i <= 100; i++) {
  if(i * i < number) {
    resultNumbers.push(i);
  }
}
console.log(resultNumbers.join(', '));

// 4
function isPrime(number) {
  if(number <= 1) {
    return false;
  } else if(number === 2) {
    return true;
  }
  for(let i = 2; i < number; i++) {
    if(number % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(6));

// 5
const numbers2 = [9, 27, 65, 81, 13];
function canItBeObtainedByMultiplyingThree(number) {
  let stageMultiplier = 3;

  while(stageMultiplier < number) {
    if(stageMultiplier * 3 === number) {
      return true;
    } else {
      stageMultiplier *= 3;
    }
  }
  return false;
}

let resultArr = [];

for(i in numbers2) {
  resultArr.push(canItBeObtainedByMultiplyingThree(numbers2[i]));
}
console.log(resultArr.join(', '));
