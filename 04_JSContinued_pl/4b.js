window.onload = function(){
    document.getElementById("sendButton").onclick = function(){
        let tekst = document.getElementById("textField").value;
        
        let contentSection = document.getElementById("content")
        let artykul = document.createElement("article")
        let akapit = document.createElement("p")
        let nowyTekst = document.createTextNode(tekst)
        artykul.appendChild(akapit)
        akapit.appendChild(nowyTekst)
        contentSection.appendChild(artykul)
    }
}