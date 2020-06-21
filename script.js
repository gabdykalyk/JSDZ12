// TASK 1
console.log("Привет мир!");

// TASK 2
let a = 12;
let b = 5;
let substract = a - b;
let addTwo = a + 2;
let multiple = a * b;
let divide = a / b;
let rem = a % b;
let power = a ** b;
console.log(substract);
console.log(addTwo);
console.log(multiple);
console.log(divide);
console.log(rem);
console.log(power);

// TASK3
let q = prompt("Enter first number");
let w = prompt("Enter second number");
let divisionOfTwo = q / w;
console.log(divisionOfTwo);

// TASK4
let number = prompt("Enter number");
if (number > 10) {
    console.log(`${number} is bigger than 10`);
} else {
    console.log(`${number} is smaller than 10`);
}

// TASK5 
let height = 23;
let width = 10;
let s = height * width;
console.log(`Area of rectangle is ${s}`)

//TASK6,7
let name = prompt('Как тебя зовут?');
let surname = prompt('Какая у тебя фамилия?');
let country = prompt('В какой стране ты проживаешь?');
let city = prompt('Из какого ты города?');
console.log(`Привет, меня зовут ${name} ${surname}, я проживаю в стране ${country}, город - ${city}`)

//TASK8
let x = 3;
let y = 20;
let result = (((72 * y) + (22 * x)) / 4) + 232;
console.log(result);

//TASK9
x = 16;
y = 20;
result = (((100 * y) / 2) + 5 * (x / 5) - 55) * 6;
console.log(result)

//TASK10
let r = prompt('Запиши радиус целиндра');
let h = prompt('Запиши высоту цилиндра');
let V = Math.PI * (r ** 2) * h;
let S = 2 * Math.PI * r * (r + h);
console.log(`Объем цилиндра равен ${V}, а его площадь ${S}`);
