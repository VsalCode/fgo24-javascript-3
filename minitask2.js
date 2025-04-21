// Built In method

let buah = ['jeruk','apel','mangga','pisang','duren'];

// 1. pop (menghapus index terakhir)
buah.pop()
console.log(buah)

// 2. shift (menghapus index pertama)
buah.shift()
console.log(buah)

// 3. unshift (menambah index di awal array)
buah.unshift('semangka')
console.log(buah)

// 4. plice hapus
buah.splice(3, 1); //(index ke-berapa, jumlah index yg dihapus);
console.log(buah)

// 5. splice tambah
buah.splice(1, 0, 'nanas', 'manggis'); // (index, 0, value yg ditambahkan)
console.log(buah)

let mhs = {
  nama: 'faisal',
  nim: 312210322,
  prodi: 'teknik informatika'
}

// 6. untuk memanggil keys dari object dan dijadikan array
console.log(Object.keys(mhs));
 

// 7. untuk memanggil value saja dari object dan dijadikan array
console.log(Object.values(mhs));
 

// 8. untuk menjadikan setiap key beserta valuenya dalam object menjadi masing2 array 
console.log(Object.entries(mhs));
 

// 9. untuk mengecek property object
console.log(Object.hasOwnProperty('nim') );

// 10. untuk menjadikan huruf kecil semua
const kata1 = "SAYA PERGI KE PASAR"
console.log(kata1.toLowerCase());

// 11. untuk menjadikan kapital semua
const kata2 = "saya pergi ke pasar"
console.log(kata2.toUpperCase());

// 12. untuk membalikkan index array ke 0 ke yang terakhir dan seterusnya
const array1 = ["one", "two", "three"];

const reversed = array1.reverse();
console.log("reversed:", reversed);

// 13. untuk menggabungkan 2 array
const arr1 = ["a", "b", "c"];
const arr2 = ["d", "e", "f"];
const array3 = arr1.concat(arr2);

console.log(array3);
  
// 14. untuk mencari value di dalam array
 const arr = [5, 12, 8, 130, 44];

const found = arr.find((element) => element > 10);
console.log(found);
 
// 15. Eval: mengubah aritmatika yang dilakukan di dalam string menjadi hasil dalamm bentuk number
console.log(eval("2 + 2"));

// 16. forEach: unutuk memecah sekaligus melakukan perulangan di array 
const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
colors.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});

// 17. indexOf: untuk mengecek value di index berapa
const fruits = ["Apple", "Banana"];
console.log(fruits.indexOf("Banana"));

// 18. includes: untuk mengecek apakah value tersebuat ada di salah satu index di dalam array
console.log(fruits.includes("Apple"));

// 19.toSpliced: fungsi nya hampir sama seperti slice(), namun toSpliced() digunakkan kalau index nya mau di re assiggn  
let animal = "ayam, bebek, sapi, unta"

console.log(animal.split(",").toSpliced(2, 1, "domba"));

//. 20 Fungsinya hapir sama untuk me re assign index dalam array
const arrX = [1, 2, 3, 4, 5];
console.log(arrX.with(2, 6));

/*----------------------------------------------------------------
 BUILT IN FUNCTION
----------------------------------------------------------------*/


// 1. untuk mengubah string menjadi number
console.log(parseInt("123"));

// 2. untuk mengecek NaN (Not a Number)
function cekAngka(x) {
  if (isNaN(x)) {
    return "Not a Number!";
  } else{
    return "a Number !"
  }
}

console.log(cekAngka("100F"));

// 3. untuk men set waktu kapan sebuah fungsi dijalankan 
setTimeout(() => {
  console.log("HALLO 1");
}, 5000);
setTimeout(() => {
  console.log("HALLO 2");
}, 3000);
setTimeout(() => {
  console.log("HALLO 3");
}, 1000);

// 4. prompt: untuk mereturn prompt di browser
prompt("hallo")

// 5. Eval: mengubah aritmatika yang dilakukan di dalam string menjadi hasil dalamm bentuk number
console.log(eval("2 + 2"));
