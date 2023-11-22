let numeroUM = 1
let stringUM = "1"
let numeroTRINTA = 30
let stringTRINTA = "30"
let numeroDEZ = 10
let stringDEZ = "10"

if ("numeroUM == stringUM") {
    alert('As variáveis numeroUM e stringUM tem o mesmo valor, mas tipos diferentes')
} else {
    alert('As variáveis numeroUM e stringUM não tem o mesmo valor')
}

if ("numeroTRINTA === stringTRINTA") {
    alert('As variáveis numeroTRINTA e stringTRINTA tem o mesmo valor e mesmo tipo')
} else {
    alert('As variáveis numeroTRINTA e stringTRINTA não tem o mesmo tipo')
}

if ("numeroDEZ == stringTRINTA") {
    alert('As variáveis numeroDEZ e stringDEZ tem o mesmo valor, mas tipos diferentes')
} else {
    alert('As variáveis numeroDEZ e stringDEZ não tem o mesmo valor')
}