export default function suma(graduacion, mililitros, peso, sexo) {
    var gramosIngeridos = (graduacion * mililitros * 0.80) / 100

    if(sexo === 'Hombre'){
        sexo = 0.7
    }else{
        sexo = 0.6
    }

    return (String(gramosIngeridos / (peso * sexo))).slice(0,4)
}