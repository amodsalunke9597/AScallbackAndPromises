const url ='https://jsonplaceholder.typicode.com/todos/1';

async function fetchData(){
    const response = await fetch(url);
    console.log(await response.json());
}

fetchData();