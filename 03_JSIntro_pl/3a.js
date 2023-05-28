function silniaIt(liczba) {
    let silnia = 1;

    if(liczba == 0) {
        console.log("0! = 1")
    } else {
        for(i=1; i<= liczba; i++) {
            silnia = silnia*i;
        }
        console.log("Silnia iteracyjnie: "+ liczba+"! = " + silnia)
    }
}

let test = 12
silniaIt(test)

var silnia = function silniaRek(liczba) {
    let silnia = 1;

    if(liczba > 1) {
        silnia = liczba * (silniaRek(liczba-1))
    } else {
        silnia = 1
    } 
    return silnia;
}
silnia(test)

console.log("Silnia rekurencyjnie: "+ test + "! = " + silnia(test))