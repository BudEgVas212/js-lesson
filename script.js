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