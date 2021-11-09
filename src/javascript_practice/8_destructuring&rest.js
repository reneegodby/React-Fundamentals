const array = [ 'thing', 42, false, {key: 'value'}, [1, 2, 3, 4, undefined], NaN];

// let stringVar = array[0];
// let numVar = array[1];
// let objVar = array[3];
// let nanVar = array[array.length - 1];

// console.log(stringVar, numVar, objVar, nanVar);

//Without destructing, you have to manually make a new variable and target a value from the array (which is usually done in separate lines).  For the amount of repetition involved with doing this, it would be nice to have a faster way to grab and assign values from the array.  Fortunately, destructuring simplifies this process greatly. 

let [string, num, , obj, , nan] = array;
console.log(string, num, obj, nan);

//As you can see above, we can declare variables in what looks like our array square-bracket notation in our first line.  Using the square brackets following a let, const, or var, Javascript knows to interpret the brackets as variable assignment.  The values of these variables come from the specific ordered values in the 'array' array.  Notice the use of double commas in some places.  These double commas allow us to skip certain values of the array we don't care about.


let newArr = [ 'a', 1, undefined, ...array];
console.log(newArr);

const testObj = {
    testString: 'stringy thingy',
    testNum: 2,
    testBool: true,
    testObject: {key: 'waluigi'},
    testArray: [1, 2, 3, 4, undefined],
    testNaN: NaN
}

// const objString = testObj.testString;
// const objNum = testObj.testNum;
// const ojbObj = testObj.testObject;
// const objNan = testObj.testNaN;

// console.log(objString, objNum, ojbObj, objNan);

let {testString, testNum, testObject, testNaN} = testObj;
console.log(testString, testNum, testObject, testNaN);

let newObj = {newString: 'more strings', anotherString: 'this is a string', ...testObj};
console.log(newObj)

