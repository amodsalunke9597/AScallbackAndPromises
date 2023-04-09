function greet(name){
    return new Promise((resolve) => {
        const greets = `Hello, ${name}!`;
        resolve(greets);
    })
}

greet('Amod').then((message) => console.log(message));