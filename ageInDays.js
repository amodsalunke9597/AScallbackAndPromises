const string = {
    firstName: 'Amod',
    lastName: 'Salunke',
    age: 25
}

function ageInDays(string,callback){
    const fullName = `${string.firstName} ${string.lastName}`;

    days = string.age*365;

    return callback(fullName,days);
}



function callback(fullName, callback){
    return `The person's full name is ${fullName}, and their age in days is ${callback} `;
}

console.log(ageInDays(string,callback));