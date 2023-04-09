function manipulate(string, callback){
    const inputString = string.toUpperCase();

    return callback(inputString);
}

function callback(mani){
    return `The manipulated string is ${mani}`;
}

console.log(manipulate('hello, world! ',callback));