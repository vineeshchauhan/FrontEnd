// === equality operator
// !== not equal to operator
// < less than operator
// =< equal to or less than operator
// > greater than operator
// >= equal to or greater than operator

let childAge = 7;
let seniorAge = 65;

let age1 = 6
let age2 = 45
let age3 = 70

let isAge1Child = age1 <= childAge
let isAge2Child = age2 <= childAge  

let isAge3Senior = age3 >= seniorAge
let isAge2Senior = age2 <= childAge 

console.log('Is age1 a child :'+ isAge1Child)

console.log('Is age2 a Child :'+ isAge2Child)

console.log('Is age2 a Senior :'+ isAge2Senior)

console.log('Is age3 a Senior :'+ isAge3Senior)