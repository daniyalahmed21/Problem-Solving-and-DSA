var numJewelsInStones = function(jewels, stones) {
    let occurrences = 0 ;
    for (let i = 0; i < stones.length; i++) {
        if(jewels.includes(stones[i] )){
            occurrences ++ 
        }
    }

    return occurrences;
};

let jewels = "aA", stones = "aAAbbbb" ;

console.log(numJewelsInStones(jewels,stones))