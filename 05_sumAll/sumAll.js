const sumAll = function(x,y) {
    
    if (x < 0 || y < 0 || typeof x !== 'number' || typeof y !== 'number') {return 'ERROR';}

    let rangeArray = Array.from({length: Math.min(x,y) + Math.abs(x-y)}, (_, i) => i + Math.min(x,y));

    //return rangeArray
    return rangeArray.reduce((a,b) => a + b);
};

// Do not edit below this line
module.exports = sumAll;
