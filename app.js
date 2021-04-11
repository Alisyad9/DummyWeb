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
  // result.push(...value);
  console.log(result);
  // if (typeof value === 'number') {
  //   console.log('number');
  // } else {
  //   console.log(['string', 2, 1, 3]);
  // }
  // return value;
}

// numbersOnly([1, 2, 3, 4, '22'][(2, 2, 3)]);

// function reverse(str) {
//   let tempLetter = str.split(' ');

//   let tempStorage = [tempLetter];
//   console.log(tempLetter);
//   var result = [];
//   let newString = [];
//   for (let i = 1; i < tempLetter.length; i += 2) {
//     if ((i) => 1) result.push(tempLetter[i]);
//     result.forEach((element) => {});

// if ((i) => 0) newString.push(tempLetter[i]);
// console.log(newString);
// let reverseString = result.reverse();
// console.log(result[i]);
//   }

//   return result;
// }

// console.log(reverse('how are you doing MR Baalwaan'));

// function reverse(string) {
//   let finalString = '';
//   var result = [];
//   var result2 = [];
//   let tempLetter = string.split(' ');
//   for (let i = 0; i < tempLetter.length; i++) {
//     tempLetter[i];
//     // console.log(i);
//     if (i % 2 && i >= 0) {
//       result = tempLetter[i].split('').reverse('').join('');
//       result2.push(result);
//       console.log(result);
//       // console.log(tempLetter[i]);
//     } else {
//       result2.push(tempLetter[i]);
//       // console.log(tempLetter[i]);
//     }
//   }
//   finalString = result2;
//   return finalString.join(' ').trim('');
// }

// console.log(reverse('Sfinnally it works, my friend      as    sadas'));

let inList = (a, b) => {
  var testArrat = [];

  // let resulta = [];
  // let resultb = [];
  // resulta.push(...a);
  // resultb.push(b);
  // console.log(resulta);

  for (let i = 0; i < a.length; i++) {
    testArrat.push(a[i]);
    console.log(a[i]);
    for (let j = 0; j < b.length; j++) {
      console.log(b[j].length);

      if (a[i].indexOf(b)) {
      }
    }
    // s
    console.log(a[i]);

    // if (a[i].indexOf(b) !== -1) {
    //   console.log(' present');
    //   if (a === b) break;
    //   {
    //   }
  }

  return testArrat;
};

console.log(inList([1, 2, 3, 4], [1, 2]));
