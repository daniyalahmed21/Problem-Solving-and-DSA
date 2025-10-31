// var numJewelsInStones = function(jewels, stones) {
//     let occurrences = 0 ;
//     for (let i = 0; i < stones.length; i++) {
//         if(jewels.includes(stones[i] )){
//             occurrences ++ 
//         }
//     }

//     return occurrences;
// };

var numJewelsInStones = function(jewels, stones) {
    let jewelSet = new Set()
    let occurrences = 0 ;

    for (let i = 0; i < jewels.length; i++) {
        jewelSet.add(jewels[i])
    }

    for (let i = 0; i < stones.length; i++) {
        if(jewelSet.has(stones[i])){
            occurrences++
        }
    }

    return occurrences;
};

let jewels = "aA", stones = "aAAbbbb" ;

console.log(numJewelsInStones(jewels,stones))