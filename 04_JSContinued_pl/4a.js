window.onload = function(){
    document.getElementById("sendButton").onclick = function(){
        let cel = document.forms.formularz.Cel.value;
        let far = (cel*1.8) +32

        document.forms.formularz.Far.value = far;
    }
}