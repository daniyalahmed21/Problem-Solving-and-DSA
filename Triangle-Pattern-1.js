for (let row = 0; row <= 4; row++) {
  let star = "";

  for (let col = 3; col >= row; col--) {
    star = star + " ";
  }

  for (let col = 0; col <= row; col++) {
    star = star + "*";
  }

  console.log(star);
}
