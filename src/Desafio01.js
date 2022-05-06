///////////////////////////////////////////////  COM 1.000 NUMEROS ////////////////////////////////////////////////
///////////////////////CODIGO DA RESPOSTA COM 1.000.000 ESTA COMENTADO ABAIXO DA LINHA 27//////////////////////////

const inverteNum = num => 
parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)

const main = () => {
const n = []
    for (let i = 0; i < 1000; i++) {
        if ((((i + inverteNum([i])) % 2) !== 0) & ((String(i)).slice(-1) != 0) & (((i + inverteNum([i]))) < 1000)
        & (n.find(element => element == inverteNum([i]))) != inverteNum([i])) {
            n.push(i) 
        }
    }
    return console.log(n)
  }
 main()

/////////////////////////////////////////// COM 1.000.000 DE NUMEROS ///////////////////////////////////////////
//PARA TESTAR COM 1.000.000, BASTA COMENTAR O CODIGO ACIMA E DESCOMENTAR O CODIGO ABAIXO

// const inverteNum = num => 
// parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)

// const main = () => {
// const n = []
//     for (let i = 0; i < 1000000; i++) {
//         if ((((i + inverteNum([i])) % 2) !== 0) & ((String(i)).slice(-1) != 0) & (((i + inverteNum([i]))) < 1000000)
//         & (n.find(element => element == inverteNum([i]))) != inverteNum([i])) {
//             n.push(i) 
//         }
//     }
//     return console.log(n)
//   }
//  main()