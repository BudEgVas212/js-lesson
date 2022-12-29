let user = "John Doe";
console.log(user) 

let student = "Egor"
console.log(student);

user = student;
//присвоили значение переменной student переменной user
console.log(user);

let test = 1;
test++
test = test + '1';
//в переменной test сейчас число 2 и строка 1 т.е. 21
console.log(test);

test = test - 1;
console.log(test);
//сейчас переменная test имеет значение 20

let number = prompt("Угадай число")
if(number == 10) {
    alert("МОЛОДЕЦ")
}
else {
    alert("НЕ МОЛОДЕЦ")
}

function EGOR_PROGRAM(a, b) {
if (a%2==0 && b%2==0){
    return (a*b)
}
if (a%2!=0 && b%2!=0){
    return (a+b)
}
}
console.log(EGOR_PROGRAM(5,6))

function years (p,s) {
    let r = p-s
    return (r-s)
}
console.log(years(40,12))


m = [2,3,4,5]
let j = 1
for(let i=0; i<m.length; i++){
    j=j*m[i]
}
console.log(j)

function composition (m){
    let j = 1
for(let i=0; i<m.length; i++){
    j=j*m[i]
}
return (j)
}
G = [6,7,8,19]
console.log(composition(g))



function summa (a, b){
    let c = a-b
   return  c
}
try {
    throw summa (9, 1)>0
}
catch(a) {
    console.log("Отрицательный результат функции")
}
finally{console.log("Функция проверена")}



const c = "I am the best boy"
function magic (a){
    return a.split(" ")
}
console.log(magic(c))


const sr = "I am the best girl"
let m = 10
function podstroka (st,o){
    return st.substring(0, o)
}
console.log(podstroka(sr, m))


const stroka = "I love my dog"
function pupamupa (stroka){
    let mass = stroka.split(" ")
    let masc = mass.join("-")
    return masc.toUpperCase()
}
console.log(pupamupa(stroka))

const leg = "нога"
function firstWord (leg){
    return leg[0].toUpperCase()+leg.slice(1) 
}

console.log(firstWord(leg))


const stroca = "12"
let n = 5
function numbers (stroca, n){
    let m = n-stroca.length
    let massiv = stroca.split()
    for(let i = 0;i < m;i++){
        massiv.push("0")
    }
    return massiv.join()
}
console.log(numbers(stroca, n))


const SR = "nbgtyuikgoi;u;op"
const sr = "fgpkdjfogifjn"

function sravnenie (SR, sr){
    return SR.localeCompare(sr)
}
console.log(sravnenie(SR, sr))

const s = "2022-12-31"
function formdate (data){
   let d = data.split("-") 
   let a = d[2]+"."+d[1]+"."+d[0]
   
   return a
}
console.log(formdate(s))

const l = "10 + 5"
function math (strochka){
    let s = strochka.split()
    if(s[1]== "+"){
        return Number(s[0]) + Number(s[2])
    }
    if(s[1] == "-"){
        return Number(s[0]) - Number(s[2])
    }
    if(s[1] == "/"){
        return Number(s[0]) / Number(s[2])
    }
    if(s[1] == "*"){
        return Number(s[0]) * Number(s[2])
    }
}
console.log(math(l))

