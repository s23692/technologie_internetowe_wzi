function Student(imie, nazwisko, nrIndeksu, oceny) {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.nrIndeksu = nrIndeksu;
    this.oceny = oceny;
    this.srednia = function(){
        let srednia = 0;
        let suma = 0;
    
        if(oceny.length!=0) {
            for(i = 0; i< oceny.length; i++) {
                suma += oceny[i];
            }
            srednia = suma/oceny.length
        } 
        
        console.log("Imie: " + imie + ", nazwisko: " + nazwisko + ", srednia ocen: " + srednia)
    }

    console.log("Utworzono obiekt")
}



let testStudent = new Student("Jan","Kowalski","S12345",[4,5,4.5,4,5])
testStudent.srednia()