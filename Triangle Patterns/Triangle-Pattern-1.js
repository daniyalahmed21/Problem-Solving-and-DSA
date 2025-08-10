function Pattern(n) {
  for (let row = 1; row <= n; row++) {
    let star = "";

    for (let spaces = n-1; spaces >= row; spaces--) {
      star = star + " ";
    }

    for (let stars = 1; stars <= row; stars++) {
      star = star + "*";
    }

    console.log(star);
  }
}

Pattern(5)


//      *
//     **
//    ***
//   ****
//  *****