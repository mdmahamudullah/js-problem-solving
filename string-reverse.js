function reversedf(text) {
    let reversed='';
    for(let i=text.length -1;i>=0;i--){
        const element=text[i];
       // console.log(element);
        reversed=reversed+element;
        console.log(element,reversed);
    }
    return reversed;
}

const myString='hi, i am hamza';
const reversed=reversedf(myString);
console.log(reversed);

//reversed word


function reverseSentence(str){
    //return str.split(" ").reverse().join(" ");
    //another way
    str=str.split(" ");
    str=str.reverse(" ");
    return str.join(" ");
  }
  
  reverseSentences=reverseSentence("This is a test");
  console.log(reverseSentences);


