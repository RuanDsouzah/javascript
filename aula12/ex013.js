var agora = new Date()
var diasem = 5
/*
para o javascript os dia das semana sao numerada
0 = domingo
1 = segunda
2 = terça
3 = quarta
4 = quinta
5 = sexta
6 = sabado
*/
//console.log(diasem)

switch(diasem) {
    case 0: 
    console.log('domingo')
    break
    case 1: 
    console.log('segunda')
    break
    case 2: 
    console.log('terça')
    break
    case 3: 
    console.log('quarta')
    break
    case 4: 
    console.log('quinta')
    break
    case 5: 
    console.log('sexta')
    break
    case 6: 
    console.log('sabado')
    break
    default:
        console.log('[ERRO] dia invalido')
        break
}