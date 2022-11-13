let temp = 100;
//And Operator - True if both side should be true, otherwise false
//Or Operator - True if any side is true, otherwise false
if(temp >= 65 && temp <= 98){
    console.log('It is pretty well outside');
}else if(temp <= 0 || temp >= 100){
    console.log('Temparaure is not suitable outside')
}