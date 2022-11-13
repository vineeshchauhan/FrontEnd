// Objects can be passed to functions and objects can be returned from the function.

let temperature = function(fahrenheit){

    return {
        tempInfahrenheit : fahrenheit,
        tempInCelcius : (fahrenheit -32) * (5/9),
        tempInKelvin : (fahrenheit + 459.67) * (5/9) 
    }
}

let temperatureInAllForms = temperature(74)

console.log(`
Temparature in Fahrenheit ${temperatureInAllForms.tempInfahrenheit} 
Temparature in Celcius ${temperatureInAllForms.tempInCelcius}  
Temparature in Kelvin ${temperatureInAllForms.tempInKelvin}`)

