//balanced
const testbrackets1 = "[()]{}{[()()]()}";
//balanced
const testbrackets2 = `([{}])`;
//not balanced
const testbrackets3 = "{(})[]";
//not balanced
const testbrackets4 = "[(])";
//not balanced
const testbrackets5 = "[()";

//driver function used for display and passing values.
function checkBrackets() {

    //change testbrackets here. makes easire to change in one place.
    let testbrackets = document.getElementById("bracketInput").value;

    //implement isBalanced function. checks if the bracket string is balanced.
    let results = isBalanced(testbrackets);

    //used for display no need to change
    let msg = "";

    if (results == true) {
        msg = `Brackets are balanced ==> ${testbrackets}`;
    } else {
        msg = `Brackets are NOT balanced ==> ${testbrackets}`;
    }

    //display the message
    document.getElementById("results").innerHTML = msg;
    
    // Clear the input field
    document.getElementById("bracketInput").value = "";

}

//takes an array of strings and returns the longest one. 
function isBalanced(brackets) {
    const stack = [];
    const openingBrackets = '([{';
    const closingBrackets = ')]}';
    const bracketPairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let i of brackets) {
        if (openingBrackets.includes(i)) {
            stack.push(i);
        } else if (closingBrackets.includes(i)) {
            const matchingOpeningBracket = bracketPairs[i];
            if (stack.length === 0 || stack.pop() !== matchingOpeningBracket) {
                return false;
            }
        }
    }

    return stack.length === 0;

}

module.exports = isBalanced;
