let test = [6,82,45,9,1,95,17,57,32,100,7]

function sortNum(a,b) {
    return a-b;
}

function liczby(tablica) {
    
    tablica.sort(sortNum)

    console.log("Druga najmniejsza liczba to: " + tablica[1] + ", a druga najwieksza to: " + tablica[tablica.length-2])
}

liczby(test)