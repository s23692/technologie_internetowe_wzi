window.onload = function(){
    var button = document.getElementById("sendButton");

    button.addEventListener("click", function(e){
        var tekst = document.getElementById("nazwa").value;
        var numer = document.getElementById("numer").value;
        var poprawny = true;
        var blad = ""

        console.log(tekst.length)
        console.log(tekst)
        console.log(numer)

        if(tekst == "") {
            e.preventDefault();
            blad = blad + "Puste pole tekstowe!"
            poprawny = false
        } 
        if(isNaN(numer)){
            e.preventDefault();
            blad = blad + "Podana wartość nie jest liczbą"
            poprawny = false
        }

        if(poprawny == true) {
            return true
        } else {
            alert(blad);
            return false
        }
    }
    )
}