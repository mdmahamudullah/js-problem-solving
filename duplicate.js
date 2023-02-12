

//first way
function removeDuplicates(arr) { 
    let unique_array = [] 
    for(let i = 0;i < arr.length; i++){ 
      if(unique_array.indexOf(arr[i]) == -1){ 
        unique_array.push(arr[i]) 
      } 
    } 
    return unique_array;
  } 
  //another way
function removeDuplicatesN(arr) { 
    let unique_array = [] 
    for(let i = 0;i < arr.length; i++){ 
      if(unique_array.includes(arr[i]) ===false){ 
        unique_array.push(arr[i]) 
      } 
    } 
    return unique_array ;
  } 
  let arr = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]; 
  console.log(removeDuplicates(arr));

  const hi =[546,456,456,2,5,4,6,6,4,2,5,5];
  console.log(removeDuplicatesN(hi));