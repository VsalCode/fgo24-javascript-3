/*----------------------------------------------------------------
REVERSE WORDS
----------------------------------------------------------------*/

const kata = "malam";

const palindrom = kata.split("").reverse().join("")

console.log(palindrom);


if(kata === palindrom){
  console.log("palindrom");
} else{
  console.log("bukan palindorm");
  
}

/*----------------------------------------------------------------
REVERSE WORDS
----------------------------------------------------------------*/

const reverseWords = "saya belajar js";

console.log(reverseWords.split(" ").reverse());
