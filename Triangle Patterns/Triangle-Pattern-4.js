function Pattern(n) {
    for (let row = 1; row <= n; row++) {
      let star = "";

      let stars = n - row + 1
      for (let k = 1; k <= stars; k++) {
        star = star + "*";
      }
  
      console.log(star);
    }
  }
  
  Pattern(4);
  
// ****
// ***
// **
// *
  