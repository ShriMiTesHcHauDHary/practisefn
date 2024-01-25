//find prime number
function primeno(n){ //prime no :- if no divided by any no smaller then him
    if (n <=1)
    return false + "no is not prime" + n;

    for (let i=2 ; i<n;i++){
    if(n% i ==0)
    return false + "no is not prime" + n;
    }
    return true + "no is prime" + n;
   
}

const no = primeno(6)
console.log(no)

//dice game
let dice = 5

switch (dice){
    case 1 :
        console.log("move 1 forward" + dice)
        break
        case 2 :
        console.log("move 2 forward" + dice)
        break
        case 3 :
        console.log("move 3 forward" + dice)
        break
        case 4 :
        console.log("move 4 forward" + dice)
        break
        case 5 :
        console.log("move 5 forward" + dice)
        break
        case 6:
        console.log("move 6 forward" + dice)
        break
        default :
        console.log("turn again")
}

//randome password generator
//function
//slice(-4)==> for last 4 elment ,
function randompassword(uniquekey){
    let key = uniquekey.toString().substring(0, 3)
    let random = Math.floor(Math.random()*50);
    let extrasymboles = "@#$%"
    return key + random + extrasymboles
}

const a1 = randompassword("mitesh")
console.log(a1)

//with parseInt
function randompassword(uniquekey){
    let value = uniquekey.toString().substring(0,3)
    let random = parseInt(Math.random()*1000);
    return value + random + "@#$%^"
}

let ar = randompassword("mitesh")
console.log(ar);


let arrow = (key) =>{
    let value = key.toString().substring(0,3)
    let random = parseInt(Math.random()*1000);
    return value + random + "@#$%^"
}

let aar = arrow("mitesh")
console.log(aar);

//substring help use to cut element from front and its first index start before first element
const checksubString = "012345"
console.log(checksubString.substring(0,3));


