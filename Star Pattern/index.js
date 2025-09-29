function StarPatternOne(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "*";
    }
    console.log(row);
  }
}

StarPatternOne(6);

function StarPatternTwo(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row += "*";
    }
    console.log(row);
  }
}

StarPatternTwo(6);
