console.log("it works!")
const fuelType = prompt("Qual o tipo de gasolina deseja comprar? \n (A) Alcool \n (G) Gasolina")
const liters = Number(prompt("quantos litros deseja?"))
getDiscount(fuelType, liters)
function getDiscount (fuelType, liters) {
    
    if (fuelType === "A") {
        gasDiscount(liters)
    } else if(fuelType === "G") {
        alcoholDiscount(liters)
    }else{return alert("use apenas A ou G")}
}

function gasDiscount (liters) {
    if (liters >= 20) {
        const result = calc(3, liters)
        return alert("Você terá 3% de desconto! o valor total a pagar será R$ " + result + " !")
    } else if (liters < 20) {
        const result = calc(5, liters)
        return alert("você terá 5% de desconto! o valor total a pagar será R$ " + result + " !")
    }
}

function alcoholDiscount (liters) {
    if (liters >= 20) {
        const result = calc(4, liters)
        return alert("Você terá 4% de desconto! o valor total a pagar será R$ " + result + " !")
    } else if(liters < 20) {
        const result = calc(6, liters)
        return alert("você terá 6% de desconto! o valor total a pagar será R$ " + result + " !")   
    }
}

function calc(discount ,liters) {
    const coustPerLiter = 5
    const value = coustPerLiter * liters
    console.log(value)
    const discountValue = value * discount/100
    console.log(discountValue)
    const result = value - discountValue
    console.log(result)
    return result.toFixed(2)
}