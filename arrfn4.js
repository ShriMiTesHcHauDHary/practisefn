let arr = [0,2,2,3,4,5,6,7,8,9,10,"m"]
let naam = "miteshchaudhary"

let ftt = Array.from("mitesh")
console.log(ftt);

let ttt = arr.join(" ")
console.log(ttt);

let gtt = naam.split(" ")
console.log(gtt);

let htt = arr.at(11)
console.log(htt);

let jtt = arr.indexOf("m")
console.log(jtt);

let ktt = arr.findIndex((x)=>x > 1)
console.log(ktt);

let ytt = arr.lastIndexOf(1)
console.log(ytt);

// let ltt = arr.every((x)=>x >= 0)
// let ltt = arr.some((x)=>x >= 0)
// let ltt = arr.includes("m")
// let ltt = arr.find((x)=> x >= 1)
let ltt = arr.sort()
console.log(ltt);

