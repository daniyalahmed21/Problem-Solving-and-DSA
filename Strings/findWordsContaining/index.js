var findWordsContaining = function(words, x) {
    let indexes = []
     words.forEach((word,index) => {
        word.includes(x) && indexes.push(index) 
     });

     return indexes
};

let words = ["leet","code"], x = "e"
console.log(findWordsContaining(words,x)
)