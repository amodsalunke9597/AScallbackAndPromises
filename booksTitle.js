const books = [
    {
        title:'abc',
        author:'xyz',
        year:1960
    },
    {
        title:'def',
        author:'uvh',
        year:1961
    },
    {
        title:'mnp',
        author:'hhhhhhj',
        year:1965
    }
]

function booksTitle(object, callback){
    const tital = object.map((val) => val.title);

    return callback(tital);
}

function callback(books){
    books.sort();
    console.log(books.join(', '));
}

booksTitle(books, callback);
