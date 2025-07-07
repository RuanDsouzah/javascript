function carregar() { 
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora sâo ${hora} horas`

    if (hora >= 0 && hora <= 12) {
        img.src = 'manha.png'
        window.document.body.style.background = '#efe0a9'
    } else if (hora > 12 && hora < 18) {
        img.src = 'tarde.png'
        window.document.body.style.background = '#3bb3ef'
        msg.innerHTML = `agora sâo ${hora} horas`
    } else {
        img.src = 'noite.png'
        window.document.body.style.background = '#162123'
        msg.innerHTML = `agora são ${hora} horas`
    }
}
