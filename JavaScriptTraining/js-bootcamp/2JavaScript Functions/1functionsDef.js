// Function - input (argument), code, output (return value)
let convertFahranheitToCelcius = function(tempInFarnheit){
    let tempInCelcius = ( tempInFarnheit - 32 ) * 5/9
    return tempInCelcius;
}
let tempInFarnheit = 32;
let temp = convertFahranheitToCelcius(tempInFarnheit);
console.log( tempInFarnheit+'F'+ ' in Celcius '+temp+'C');
tempInFarnheit = 68
temp = convertFahranheitToCelcius(tempInFarnheit);
console.log( tempInFarnheit+'F'+ ' in Celcius '+temp+'C');
tempInFarnheit = 100
temp = convertFahranheitToCelcius(tempInFarnheit);
console.log( tempInFarnheit+'F'+ ' in Celcius '+temp+'C');

//Observation - log(argument) is function which is used to print output to console/teminal.