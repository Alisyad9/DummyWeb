console.log('Hello World');
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navba__menu');

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

// function name(a, b) {
//   a === b
//     ? console.log('a and b, are the same value')
//     : console.log('not the same value');
// }
// const newNumber = (c, d) => c + d;
// 2, 2;

// console.log(newNumber(2, 2));

// function findShort(s) {
//   let stringWord = s.split(' ');
//   console.log(stringWord);

//   let short = stringWord[0].length;
//   console.log(short);
//   for (let i = 0; i < stringWord.length; i++) {
//     if (stringWord[i].length < short) {
//       short = stringWord[i].length;
//     }
//   }

//   return short;
// }

// console.log(findShort('2e w knows perhaps'));
var n = [1, 2, 3, 3];
function findShort(s) {
  return s
    .split(' ')
    .map((a) => a.length)
    .reduce((a, b) => Math.min(a, b));
}

function numbersOnly(value) {
  let result = [];
  result.push(...value);
  console.log(result);
  // if (typeof value === 'number') {
  //   console.log('number');
  // } else {
  //   console.log(['string', 2, 1, 3]);
  // }
  // return value;
}

numbersOnly([1, 2, 3, 4, '22'][(2, 2, 3)]);
