const repeatString = function(text, number) {
    //Error handling
    if (number < 0) {    return 'ERROR'     }
    // Return value
    var answer  = '';
    for (let index = 0; index < number; index++) {
      answer += text          
    };
    return answer;
};

// Do not edit below this line
module.exports = repeatString;
