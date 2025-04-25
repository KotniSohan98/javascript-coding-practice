var decodeString = function(s) {
    let numStack = [];
    let strStack = [];
    let currentNum = 0;
    let currentStr = '';

    for (let char of s) {
        if (!isNaN(char)) {
            // Build full number (e.g. '10' as two chars)
            currentNum = currentNum * 10 + Number(char);
        } else if (char === '[') {
            // Push current context to stacks
            numStack.push(currentNum);
            strStack.push(currentStr);
            // Reset for the next segment
            currentNum = 0;
            currentStr = '';
        } else if (char === ']') {
            let repeatTimes = numStack.pop();
            let prevStr = strStack.pop();
            currentStr = prevStr + currentStr.repeat(repeatTimes);
        } else {
            // Build the current substring
            currentStr += char;
        }
    }

    return currentStr;
};