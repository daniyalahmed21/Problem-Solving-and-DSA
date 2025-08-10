function pattern(n) {
  for (let row = 1; row <= (n - 1) / 2; row++) {
    let TopStars = "";
    for (let leftStars = 1; leftStars <= row; leftStars++) {
      TopStars = TopStars + "*";
    }

    for (let spaces = 1; spaces <= n - 2 * row; spaces++) {
      TopStars = TopStars + " ";
    }

    for (let leftStars = 1; leftStars <= row; leftStars++) {
      TopStars = TopStars + "*";
    }

    console.log(TopStars);
  }

  let middleStars = "*";
  for (let stars = 1; stars < n; stars++) {
    middleStars = middleStars + "*";
  }
  console.log(middleStars);

  for (let row = 1; row <= (n - 1) / 2; row++) {
    let bottomStars = "";
    for (let leftStars = (n - 1) / 2; leftStars >= row; leftStars--) {
      bottomStars = bottomStars + "*";
    }

    for (let spaces = 1; spaces <=2*row-1; spaces++) {
      bottomStars = bottomStars + " ";
    }

    for (let leftStars = (n - 1) / 2; leftStars >= row; leftStars--) {
        bottomStars = bottomStars + "*";
      }

    console.log(bottomStars);
  }
}

pattern(7);

// *     *
// **   **
// *** ***
// *******
