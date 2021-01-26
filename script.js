// ES5 Function that takes a variable number of arguments
const filterOutOdds = (...args) => args.filter(n => n % 2 === 0);


// findMin
const findmin = (...args) => Math.min(...args);


// mergeObjects
const mergeObjs = (obj1, obj2) => ({
    ...obj1,
    ...obj2
});


// doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v * 2)];


// Slice and Dice

const removeRandom = items => {
    let index = Math.floor(Math.random() * items.length);
    return [...items.slice(0, index), ...items.slice(index + 1)];
}


const extend = (array1, array2) => {
    return [...array1, ...array2];
}



const addKeyVal = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}

const removeKey = (obj, key) => {
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
}



const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
}

const update = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}
