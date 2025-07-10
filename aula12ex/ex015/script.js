function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `idade calculada ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex [0].checked){
            genero = 'homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'H_bebe.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'H_jovem.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'H_adulto.png')
            }else {
                //idoso
                img.setAttribute('src', 'H_idoso.png')
            }
        } else if (fsex[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'M_bebe.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'M_jovem.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'M_adulta.png')
            }else {
                //idoso
                img.setAttribute('src', 'M_idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
