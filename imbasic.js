//math.floor.math.random
let randdostring = Math.random().toString(36).slice(-8)
console.log(randdostring)

//math.random create random number 0.123456
//tostring convert to basr 36(diff types of 36 algo
//.slice (cut off last 8 charaters)  

//excepion
let pass = "sadacdacadww";
let string_length = 10;
let randomstring = " ";
for (let i = 0; i < string_length; i++){
    rnum = Math.floor(Math.random() * pass.length);
    randomstring += pass.substring(rnum,rnum+1);
}
console.log(randomstring)

rnum1 = Math.random() * 10;//return random interger according to the given number
rnum2 = Math.floor(Math.random() * 5); //floor return largest <= to the given interger
console.log(rnum1)
console.log(rnum2)

//substring use (a, b+ 1)+1 is used to get full length of string array extra
function findsubstring(str){
    let substring = str.substring(1, 7);
    console.log(substring)
}
const str = "123456789"
findsubstring(str)
                                    //startind index ==0
let substring1 = "mitesh".substring(0, 2+1);
console.log(substring1)                  //length which is -1 == +1

//.slice()(-4 if you want last 4)(4if you want to avoid first 4)
let slicethis = str.slice();
console.log(slicethis)  




