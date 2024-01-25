let arr = [0,1,2,3,4,5,6,7,8,9,10]
let naam = "miteshchaudhary"
//array from use toconvert string from array
let fromconversion = Array.from("mitesh")
console.log(fromconversion);

//join will convert anyting to string
let joinconvert = arr.join(" ")
console.log(typeof joinconvert);


//split will convert this to array element single
let spithtis = naam.split(",")
console.log(spithtis);


//pick up element of this position
console.log(arr.at(2));
//tell index of this element in array nad string
console.log(naam.indexOf("m"));
//find the first element index satisfied this condition
let yy = (x) => x > 2;
console.log(arr.findIndex(yy));
//will return last index which statisfied input
console.log(naam.lastIndexOf("m"));

//conditional functions
//return if everyone thing is true
console.log(arr.every(x=>x >=0));
//return if condition is statisfied
console.log(arr.some(x=>x>10));
//find will return that element
let hh = (f) => f > 2
console.log(arr.find(hh));
//include function will return in true and false
console.log(arr.includes(9));
//sort will to auto ascending
console.log(arr.sort());