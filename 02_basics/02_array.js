const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) //it will going to create a array inside a array at 3rd position

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); //to print flash

// const allHeros = marvel_heros.concat(dc_heros) // it will merge the 2 arrays
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] //another method to merge array. Here we can merge more than 2 arrays.

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //flat is to remove sub-array & infinity means depth uto which it has to be removed in array. If instead of depth it was 2 then, it would have removed sub-array till level 2.
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) //true or false
console.log(Array.from("Hitesh")) //create array from Hitesh word
console.log(Array.from({name: "hitesh"})) // interesting- returns null as we have to give instruction that key is also present here

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //creates a array of these 3 values