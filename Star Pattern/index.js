// function StarPatternOne(n) {
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < n; j++) {
//       row += "*";
//     }
//     console.log(row);
//   }
// }

// StarPatternOne(6);

// function StarPatternTwo(n) {
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < i + 1; j++) {
//       row += "*";
//     }
//     console.log(row);
//   }
// }

// StarPatternTwo(6);

// function StarPatternThree(n) {
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < i + 1; j++) {
//       row += i + 1;
//     }
//     console.log(row);
//   }
// }

// StarPatternThree(6);

// function StarPatternFour(n) {
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < n - i; j++) {
//       row += j + 1;
//     }
//     console.log(row);
//   }
// }

// StarPatternFour(6);

// function StarPatternFive(n) {
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < n - i; j++) {
//       row += " ";
//     }

//     for (let j = 0; j < i + 1; j++) {
//       row += "*";
//     }

//     console.log(row);
//   }
// }

// StarPatternFive(5);

// function StarPatternSix(n) {
//   for (let i = 0; i < n; i++) {
//     let row = "";
//     let switchVar = 1;
//     for (let j = 0; j < i + 1; j++) {
//       row += switchVar;
//      if (switchVar === 0) {
//         switchVar = 1;
//       } else {
//         switchVar = 0;
//       }
//     }

//     console.log(row);
//   }
// }

// StarPatternSix(5);

function StarPatternSeven(n) {
  let switchVar = 0;

  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      if (switchVar === 0) {
        switchVar = 1;
      } else {
        switchVar = 0;
      }
      row += switchVar;
    }

    console.log(row);
  }
}

StarPatternSeven(5);
