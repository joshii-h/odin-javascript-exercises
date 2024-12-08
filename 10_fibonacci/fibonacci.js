const fibonacci = function(f) {
    if (f < 0) return "OOPS";
    if (f === 0) return 0;
    if (f === 1) return 1;
    let fib = [0, 1];
    for (let i = 2; i <= f; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[f];
};

// Do not edit below this line
module.exports = fibonacci;
