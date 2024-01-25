let extrakey = ["#","%",".",";","*","@","-"]
let naam = "mitesh"
for(let i = 0;i <=4;i++){

    naam += extrakey[random()]

}
function random(){
    return parseInt(Math.random()*extrakey.length)
}
console.log(naam);