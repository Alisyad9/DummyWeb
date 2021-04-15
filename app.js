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

numbersOnly([1, 2, 3, 4, '22'][(2, 2, 3)]);

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

      // if (a[i].indexOf(b)) {
      // }
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

// console.log(inList([1, 2, 3, 4], [1, 2]));

// function isValidWalk(walk) {
//   var north = 0;
//   var south = 0;
//   var east = 0;
//   var west = 0;
//   if (walk.length === 10) {
//     for (let iterator of walk) {
//       console.log(str1[iterator]);
//       if (iterator === 'n') north++;
//       if (iterator === 's') south--;
//       if (iterator === 'e') east++;
//       if (iterator === 'w') west--;
//     }
//   } else {
//     return false;
//   }
//   return north || (south === 0 && east) || west === 0;
// }

// function filter_list(numberOnly) {
//   let resultFilter = [];
//   let element = [];
//   for (let index = 0; index < numberOnly.length; index++) {
//     element.push(numberOnly[index]);

//     console.log(element);
//     // console.log(l[index]);
//   }
//   let number = 0;
//   resultFilter = element.typeof(number);

//   console.log();

//   return resultFilter;
// }

function filter_list(a, b) {
  let resultFilter = [];
  let emptyArray = [];

  if (a.length === 0) return emptyArray;

  a.forEach((elementA) => {
    console.log(elementA);

    if (b.indexOf(elementA) === -1) resultFilter.push(elementA);
    else return emptyArray;
  });
  b.forEach((elementB) => {
    console.log(elementB);
    if (a.indexOf(elementB) === -1) resultFilter.push(elementB);
  });

  return resultFilter;
}
console.log(filter_list([1, 2, 3, 4], [2, 1]));
