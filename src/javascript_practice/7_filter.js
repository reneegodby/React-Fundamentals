const instructors = [
    {name: 'Quincy', specialty: 'Quantum Mechanics', medals: 7},
    {name: 'Kenn', specialty: 'Norse Mythology', medals: 5},
    {name: 'Carolyn', specialty: 'Kung Fu', medals: 8},
    {name: 'Paul', specialty: 'Entomology', medals: 4},
];

//Let's say that we want to iterate over this array and filter it based on the number of medals each instructor had. We only want to get instructors that have 5 or more medals.

// let instructor_names = [];

// for(let i = 0; i < instructors.length; i++){
//     if(instructors[i].medals >= 5){
//         instructor_names.push(instructors[i].name);
//     }
// }
// console.log(instructor_names)
// What do we have to do here: 1. Manage the index. 2. Check the length. 3. Increment. 4. Create an empty array. 5. Etc.

// We have to create an empty array to push the names into as we iterate through. This approach is fine for learning programming, but with ES6, the .filter function came along to make things more sleek for common tasks like iterating through a collection, and filtered based on a specific property.

const instructorNames = instructors.filter(instructor => instructor.medals >= 5);
console.log(instructorNames);

const instructorNamesTwo = instructors.filter(i => i.medals <= 5);
console.log(instructorNamesTwo);

const instructorInfo = instructors.filter(i => i.name == 'Kenn');
console.log(instructorInfo)


//Filter is really commonly used in react. Especially when you're doing some sort of search, or filtering a big array of data. Filter is a great way to do this, so that you don't modify your original array, and can create a new array of only the information you want.