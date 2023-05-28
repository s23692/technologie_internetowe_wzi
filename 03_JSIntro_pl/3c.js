let test = 'Do geese see God'

function czyPalindrom(ciag) {

    let nowy = ciag.replaceAll(" ", "")
    nowy = nowy.toUpperCase();
    let flaga = true;

    for(i = 0; i < nowy.length; i++) {
        if (nowy.charAt(i) != nowy.charAt(nowy.length-1-i)){
            flaga = false
        }
    }

    if (flaga == false) {
        console.log("Ciag \"" + ciag + "\" nie jest palidromem")
    } else {
        console.log("Ciag \"" + ciag + "\" jest palidromem")
    }

}

czyPalindrom(test)