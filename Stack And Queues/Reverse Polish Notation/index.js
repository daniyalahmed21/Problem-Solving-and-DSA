/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []
    let ans = 0 ;
    for (let i = 0; i < tokens.length; i++) {
        if(tokens.length === 1){
            return Number(tokens[0])
        }
        if (!isNaN(tokens[i])){
            stack.push(tokens[i])
        }else{
            let sign = tokens[i]
            b = stack.pop()
            a = stack.pop()
            if(sign === "+"){
                ans = Number(a) + Number(b)
            }else if (sign === "-"){
                ans = Number(a) - Number(b)
            }else if (sign === "*"){
                ans = Number(a) * Number(b)
            }else if (sign === "/"){
                ans = parseInt(Number(a) / Number(b))
            }
            stack.push(ans)
        }       
    }
    return ans
};

let  tokens = ["18"]
// let  tokens = ["4","13","5","/","+"]
console.log(evalRPN(tokens));