// Array.prototype.map2 = function(callback) {
//     let arrayLength = this.length;
//     let output = [];

//     for(let i = 0; i < arrayLength; ++i) {
//         let result = callback(this[i], i);
//         result.push(result);
//     }

//     return output;
// }

// Array.prototype.forEach2 = function(cb, thisValue) {
//     let arrLength = this.length;
//     for(let i = 0; i< arrLength; ++i) {
//         cb(this[i], i, this)
//     }

//     return thisValue;
// }

// Array.prototype.reduce2 = function (cb, initialValue) {
//     let result = initialValue;
//     for (let i = 0; i < this.length; i++) {
//         if (result === undefined && i === 0) {
//             result = this[i];
//         }
//     }
//     result = cb(result, this[i, i, this]);
//     return result;
// };

// Array.prototype.find2 = function(cb) {
//     let arrLength = this.length;
    
//     for(let i = 0; i < arrLength; ++i) {
//         if (cb(this[i], i, this)) {
//             return this[i];
            
//         }
//     }
//     return undefined;
// }

// Array.prototype.filter2 = function (cb) {
//     let arrLength = this.length;
//     let output = [];
    
//     for(let  i = 0; i < arrLength; ++i) {
//         if( cb(this[i], i, this)) {
//             output.push(this[i]);
//         }
//     }
//     return output;
    
// }

// var newArr = [1,2,3,4,5,6];

// console.log(newArr.filter2((value) => {
//   return value % 2 === 0;
// }))

// console.log(newArr.map((value) => {
//   return value * 2;
// }))

// console.log(newArr.find((value) => {
//   return value % 2 !== 0;
// }))

// console.log(newArr.reduce((total, value) => {
//   return total+=value;
// }, 0))

Array.prototype.forEach2 = function(callback) {
    for(var index in this) {
        console.log('index: ', index);
    }
}

var courses = [
    'Javascript',
    'PHP',
    'Ruby'
];


courses.forEach2(function(course, index, array) {
    console.log(index, course, array)
});