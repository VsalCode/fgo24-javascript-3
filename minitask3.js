const animal = "ayam, bebek, sapi, unta"

const animal2 = animal.split(",")

animal2.splice(2, 1, "domba");

console.log(animal2);

