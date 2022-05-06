//Entrada de dados
tempoChegada = [-2, -1, 0, 1, 2]
x = 3

const haveClass = (tempoChegada, x) => {
    let AlunosEmTempo = 0
    for (let i = 0; i <= tempoChegada.length ; i++) {
        if (tempoChegada[i] <= 0)
            AlunosEmTempo++
    }    
    if (AlunosEmTempo >= x){
        return console.log("Aula normal.")
    }else 
        return console.log("Aula cancelada.")
}

haveClass(tempoChegada, x)