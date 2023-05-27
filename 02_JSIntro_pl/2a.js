//Silnia

let x = 10;
let wynik = 1;

for(i = 1; i <= x; i++) {
    wynik = wynik * i;
}

console.log("Silnia policzona za pomoca petli for: " + x + "! = " + wynik)

let y = 5;
wynik = 1;
let j = 1;

while (j <= y) {
    wynik = wynik * j;
    j++;
}

console.log("Silnia policzona za pomoca petli while: " + y + "! = " + wynik)