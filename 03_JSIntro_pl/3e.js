let test = 'Do geese see God'

function najdluzszyWyraz(ciag) {
    let tablica = ciag.split(" ")
    let maxDl = 0
    let pozTab = 0;

    for(i = 0; i < tablica.length; i++) {
        if(tablica[i].length > maxDl) {
            maxDl = tablica[i].length
            pozTab = i
        }
    }

    console.log("Najdluzszy wyraz w ciagu \"" + ciag + "\" to: " + tablica[pozTab])
}

najdluzszyWyraz(test)