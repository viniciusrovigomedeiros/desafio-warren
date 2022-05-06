//Entrada de dados
const n = 10
const v = [2, 3, 4]

const c5 = () =>{
    let vComb = [];
    for (let i = v[0]; i < v[2] +1; i++) {
        for (let j = v[0]; j < v[2] +1; j++) {
            for (let k = v[0]; k < v[2] +1; k++) {
                for (let l = v[0]; l < v[2] +1; l++) {
                    for (let m = v[0]; m < v[2] +1; m++) {
                        if (m >= l && l >= k && k >= j && j >= i) {
                            vComb.push([i, j, k, l , m])
                        }
                    }
                }
            }
        }
    }
    return vComb
}

const c4 = () =>{
    let vComb = [];
    for (let i = v[0]; i < v[2] +1; i++) {
        for (let j = v[0]; j < v[2] +1; j++) {
            for (let k = v[0]; k < v[2] +1; k++) {
                for (let l = v[0]; l < v[2] +1; l++) {
                    if (l >= k && k >= j && j >= i) {
                        vComb.push([i, j, k, l])  
                    }
                }
            }
        }
    }
    return vComb
}

const c3 = () =>{
    let vComb = [];
    for (let i = v[0]; i < v[2] + 1; i++) {
        for (let j = v[0]; j < v[2] + 1; j++) {
            for (let k = v[0]; k < v[2] + 1; k++) {
                if (k >= j && j >= i) {
                    vComb.push([i, j, k])
                }
            }
        }
    }
    return vComb
}

const vComb = [...c3(), ...c4(), ...c5()];
let vAux = []
let vResult = []

for (let i = 0; i < vComb.length ; i++){
    let sum = vComb[i].reduce((sum, value) => sum + value, 0)
    if (sum === n) {
        vAux.push(vComb[i]);
    }
}
let min = 5;

for (let i = 0; i < vAux.length; i++) {
    if (vAux[i].length < min) {
        min = vAux[i].length;
        vResult = []
        vResult.push(vAux[i]);
    } else if(vAux[i].length === min) {
        vResult.push(vAux[i]);
    }
}

console.log(vResult);