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
  for (let row = 1; row <= n; row++) {
    let star = "";

    for (let j = 1; j < row; j++) {
      star = star + " ";
    }

    for (let stars = row; stars <= n * 2 - row ; stars++) {
      star = star + "*";
    }

    console.log(star);
  }
}

Pattern(6);

//     *
//    ***
//   *****
//    ***
//     *
