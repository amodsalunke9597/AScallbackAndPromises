function double(arr, callback){
   const doubledArr = arr.map((value) => {
    return callback(value);
   })

   return doubledArr;
}

const arr =  [1,2,3,4,5];
function callback(num) {
    return num * 2;
}

console.log(double(arr,callback));

