//Object Destructuring 1
console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

//Object Destructuring 2
console.log(discoveryYears); 
//{yearNeptuneDiscovered: 1846,  yearMarsDiscovered: 1659} 

//Object Destructuring 3
getUserData({firstName: "Alejandro", favoriteColor: "purple"}) 
// Your name is Alejandro and you like purple 
getUserData({firstName: "Melissa"}) 
// Your name is Melissa and you like green
getUserData({}) 
// Your name is undefined and you like green

//Array Destructuring 1
console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi

//Array Destructuring 2
console.log(raindrops); // "Raindrops on roses"
console.log(whiskers); // "whiskers in kittens"
console.log(aFewOfMyFavoriteThings); 
// ["Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"
] 


//Array Destructuring 3
console.log(numbers) // [10, 30, 20]


//ES2015 Object Destructuring
let obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
let {a, b} = obj.numbers


//ES2015 One-Line Array Swap with Destructuring
[arr[0], arr[1]] = [arr[1], arr[0]]


//raceResults()
function raceResults(arr){
   let [first, second, third, ...rest] = arr;
   return {first, second, third, rest};
};

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})
// ??? 