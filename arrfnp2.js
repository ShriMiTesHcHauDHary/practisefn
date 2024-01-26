let arr = [0,1,2,3,4,5,6,7,8,9,10]
let naam = "miteshchaudhary"
//map provide updated array according to conditions
// let thisis = arr.map((x)=>x*2)
// console.log(thisis);


// let thistwo = arr.filter((x)=>x>0)
// console.log(thistwo);
//will apply on all element present in array
// let thisthired = arr.reduce((x,y)=>x + y)
// console.log(thisthired);

//work as map bu provide element in string
// let thisfour = arr.forEach(x=>console.log(x*2))
// console.log(thisfour);
//return the last element in the array
// let thisfive = arr.pop()
// console.log(thisfive);
//will return the length after an add up element
// let thissix = arr.push(11,12)
// console.log(thissix);
//add alement from last an dreturn length
let thisseven = arr.unshift(2)
console.log(thisseven);
//remove last lement and return the same elment
let thiseigth = arr.shift()
console.log(thiseigth);
//return the remove elment
let thisnine = arr.splice(0, 1,"mitesh")
console.log(thisnine);

let thisten = arr.concat([11,12])
console.log(thisten);

let thiseleven = arr.fill(0, 0,5)
console.log(thiseleven);
//minus means from back
let thistwelev = arr.slice(0,1+1)
console.log(thistwelev);
