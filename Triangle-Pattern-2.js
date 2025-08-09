function Pattern(n) {
  for (let row = 1; row <= n; row++) {
    let star = "";

    let spaces = n - row;
    for (let j = 1; (j = spaces); spaces--) {
      star = star + " ";
    }

    for (let stars = 1; stars <= 2 * row - 1; stars++) {
      star = star + "*";
    }

    console.log(star);
  }
}

Pattern(5);

//     *
//    ***
//   *****
//  *******
// *********
