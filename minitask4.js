/*----------------------------------------------------------------
CARA BUILT IN
----------------------------------------------------------------*/

// 1. Palindrom

const kata = "malam";
const palindrom = kata.split("").reverse().join("")

if(kata === palindrom){
  console.log("palindrom");
} else{
  console.log("bukan palindorm");
}

// 2. Reverse Words

const reverseBuiltIn = "saya belajar js";

console.log(reverseBuiltIn.split(" ").reverse().join(" "));

/*----------------------------------------------------------------
CARA MANUAL
----------------------------------------------------------------*/

// 1. Palindrom

function deteksiPalindrom(inputKata) {
  let kata = inputKata
  let palindrom = "";
  
  for (let i = kata.length - 1; i >= 0; i--) {
    palindrom += kata[i];
  }
  
  if (kata === palindrom) {
    console.log("palindrom");
  } else {
    console.log("bukan palindrom");
  }
}

deteksiPalindrom("malam");

// 2. Reverse Words

function reverseWord2(kalimat) {
  let reserve = "";
  let word = "";
  for (let i = kalimat.length - 1; i >= 0; i--) {
    if (kalimat[i] === " ") {
      reserve += word + " ";
      word = "";
    } else {
      word = kalimat[i] + word;
    }
  }
  reserve += word;

  console.log(reserve);
}

reverseWord2("Saya belajar Javascript");
