function Pattern(n) {
  for (let row = 1; row <= n; row++) {
    let star = "";

    let spaces = row - 1
    for (let j = 1; j <= spaces; j++) {
      star = star + " ";
    }

    let stars = n - row + 1
    for (let k = 1; k <= stars; k++) {
      star = star + "*";
    }

    console.log(star);
  }
}

Pattern(5);

//   *****
//    ****
//     ***
//      **
//       *
