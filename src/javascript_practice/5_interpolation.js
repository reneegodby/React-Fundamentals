//template literals

// console.log(`Hey students,
// What bugs can 
// ${username}
// fix
// for you today?`);

//very common to see interpolation with an object in React.
const person = {
    username: 'Kenn',
    profession: 'Secret Agent'
};
console.log(`${person.username}, ${person.profession}, extraordinaire`);