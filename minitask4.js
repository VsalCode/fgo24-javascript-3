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

console.log(reverseBuiltIn.split(" ").reverse());

/*----------------------------------------------------------------
CARA MANUAL
----------------------------------------------------------------*/

// 1. Palindrom

function deteksiPalindrom(inputKata) {
  kata = inputKata
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

deteksiPalindrom("siang");

// 2. Reverse Words

function reverseWords(inputKalimat) {
  const kalimat = inputKalimat.split(' ');
  const reserve = [];
  
  // reverse kalimat
  for (let i = 0; i < kalimat.length; i++) {
      const indexTerbalik = kalimat.length - 1 - i;
      reserve.push(kalimat[indexTerbalik]);
  }
  // Gabung kalimat
  return reserve.join(' ');
}

console.log(reverseWords("saya belajar js")); 
