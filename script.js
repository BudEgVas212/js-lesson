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