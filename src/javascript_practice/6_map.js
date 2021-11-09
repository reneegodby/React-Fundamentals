// just an array of instructor objects, that includes their name and special skills:
const instructors = [
    {name: 'Quincy', specialty: 'Quantum Mechanics'},
    {name: 'Kenn', specialty: 'Norse Mythology'},
    {name: 'Carolyn', specialty: 'Kung Fu'},
    {name: 'Paul', specialty: 'Entomology'},
];
//Let's say that we want to iterate over this array and print just the names of the instructors. We'll use a forEach() method:

// let instructor_names = [];

// instructors.forEach(instructor => {
//     instructor_names.push(instructor.name);
// });

// console.log(instructor_names);
//What do we have to do here: use the forEach() method to call a function once for each element in our instructors array.

// We have to create an empty array to push the names into as we iterate through each item in the instructors array. This approach is fine for learning programming, but with ES5, the .map() function came along to make things more sleek for common tasks like iterating through a collection.

const instructorNames = instructors.map(instructor => instructor.name);
console.log(instructorNames);

const instructorSpecialties = instructors.map(instructor => instructor.specialty);
console.log(instructorSpecialties)

//The .map()function requires a return value. This is a key rule of using .map(), so the fat arrow is taking care of that requirement. 

const instructorInfo = instructors.map(i => (i.name) + ': ' + (i.specialty));
console.log(instructorInfo)

let kvArray = [
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30}
];
console.log(kvArray);

let reformattedArray = kvArray.map(obj => {
    let rObj = {};
    rObj[obj.key] = obj.value;
    console.log(rObj);
});