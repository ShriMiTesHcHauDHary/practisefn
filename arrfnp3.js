let arr = [1,2,3,1,5,6,7,8,9,10]
let str = "miteshchaudhary"
//convert string to array
let onetry = Array.from("mitesh")
console.log(onetry);
//convert to string
let twotry = arr.join(" ")
console.log(twotry);
//split will convert a str in array element
let threetry = str.split(",")
console.log(threetry);

//at will return element of particuler index
let fourtry = arr.at(1)
console.log(fourtry);
//indexof will return first element of condition applied
let fivetry = arr.indexOf(1)
console.log(fivetry);
//lastindex of will return last element of particular condition
let sixtry = arr.lastIndexOf(1)
console.log(sixtry);
//findindex return index af particuler condition
let seventry = arr.findIndex((x)=> x>2)
console.log(seventry);
//find return element first which repcify this condtion
let eigthtry = arr.find((x)=>x>2)
console.log(eigthtry);
//every
let newo = arr.every((x)=>x > 0)
console.log(newo);
let newod = arr.some((x)=>x > 0)
console.log(newod);
let newodd = arr.includes("m")
console.log(newodd);
console.log(arr.sort());