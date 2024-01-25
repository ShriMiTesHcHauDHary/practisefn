let good = ["mitesh","mitesh2","mitesh3","mitesh4"]

// //array and string conversions
// let arfirst = Array.from("mitesh")
// console.log(arfirst);
// //join will convert to string
// let arsecond = [0,1,2,3].join(" ")
// console.log(arsecond);
// //split(",") will convert string to array of elment
// let naaam = "mitesh"
// console.log(naaam.split(','));


// //array method of index
// //at(i)  on i(index) fill index number will return element 
// console.log(good.at(1));
// //findindex() return first index of  element which satisfied element
// console.log(good.findIndex(2));
// //indexof(e) return index of element
// console.log(good.indexOf(1));
// //lastindeof return last elment tsatisfied same value
// console.log(good.lastIndexOf(1));


// //boolean value return method
// //every validation return false or true
// console.log(good.every(x=>x> 0));
// //some is equal || or validtion
// console.log(good.some(x=>x>0));
// //find return elemnt  only one
// console.log(good.find(x=>x>1));
// //includes() return true and false
// console.log(good.includes(4));



// //return new array 
// //split and to string
// console.log(good.map(x=>x*2));
// //filter return all element which is true
// console.log(good.filter(x=>x > 0));
// //reduce will work on all elemnet simutanelousy
// console.log(good.reduce((x,y)=> x + y));
// // forEach() help in mutate every element
// console.log(good.forEach(x => console.log(x*2))); 
// // sort()  ascending order 
// console.log(good.sort());


// //return single element
// // pop() will return last elment
// console.log(good.pop());
// //push add and return length
// console.log(good.push("11","12"));


// //return same array with some changes
// //add element from last
// console.log(good.concat(["11","12"]));
// //fill(value, start, end(+1))
// let newaya = [0,1,2,3,4,5,6,7,8,9,10]
// console.log(newaya.fill(2, 1,8+1));
// splice(index, no of element replace,"element")
// console.log(good.splice(0, 0,"mitesh1"));
// console.log(good);
console.log(good.slice(-1));







