function calcule () {
    var msg = document.getElementById ("msg")
    var img = document.getElementById("foto")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    
    if(hora >= 0 && hora < 12){
    img.src ="imagens/dia.png"
    document.body.style.background = "#FCB381"


    } else if (hora >= 12 && hora < 18) {
        img.src = "imagens/tarde.png"
    document.body.style.background = "#FFBF6A"
    }
    else {
        img.src = "imagens/noite.png"
    document.body.style.background = "#5689A8"
    }


}