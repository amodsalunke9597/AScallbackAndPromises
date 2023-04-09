const url1 = "https://jsonplaceholder.typicode.com/todos/1";
const url2 = "https://jsonplaceholder.typicode.com/posts/1";

async function keyValue(){
   const data1 = await fetch(url1).then((response) => response.json());
   const data2 = await fetch(url2).then((response) => response.json());

   const combinedData = {
    todo: data1,
    post: data2
   }

   return combinedData;
}


keyValue().then((response) => console.log(response));
