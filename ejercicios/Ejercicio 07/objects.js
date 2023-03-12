const myObject = {
  name: "John",
  lastname: "Salchichon",
  age: 34,
  height: 1.7,
  isDeveloper: true,
};

//ask age
const myAge = myObject.age;
console.log(myAge);

//new friend object list
const friendObjectList = [
  {
    name: "Carl",
    lastname: "Carlson",
    age: 24,
    height: 1.6,
    isDeveloper: false,
  },
  {
    name: "Richard",
    lastname: "Richardson",
    age: 29,
    height: 1.8,
    isDeveloper: false,
  },
];

//list of my object and friends object
const objectsList = [{ ...myObject }, ...friendObjectList];
console.log(objectsList);

//list ordered from largest to smallest
const orderedList = objectsList.sort((a, b) => b.age - a.age);
console.log(orderedList);
