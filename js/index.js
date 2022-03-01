

/* ---------- EJERCICIO 1 ------------- */
console.log("---------- EJERCICIO 1 -------------")

const countdown = (inicio, array = []) => {
    if(inicio >= 1){
        array.push(inicio)
        return countdown(inicio-1, array)
    }else{
        return array
    }
    
}

console.log(countdown(5))


/* ---------- EJERCICIO 2 ------------- */
console.log("---------- EJERCICIO 2 -------------")

const cadenaSimetrica = (cadena, inicio=0) => {
    let length = cadena.length
    if(inicio <= Math.floor(length/2)-1){
        let split = cadena.split("")
        if(split[inicio] === split[length-1-inicio]){
            return cadenaSimetrica(cadena, inicio+1)
        }else{
            return false
        }
    }else{
        return true
    }   
    
}

let rta = cadenaSimetrica("DABALEARROZALLAZORRAELABAD")
console.log(rta, rta ? "Es simétrica" : "No es simétrica")