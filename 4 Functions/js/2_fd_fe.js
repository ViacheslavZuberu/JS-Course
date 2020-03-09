function doStuff(a, b, callback) {
    return callback(a, b);
}

console.log(doStuff(2, 2, function(e, d) {
    return e + d;
}));