const url = "https://jsonplaceholder.typicode.com/posts";

async function data(){
    const data = await fetch(url);
    const json = await data.json();
    console.log(json);
}

data();