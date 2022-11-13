//String is a JS Object. It contains many helper methods to do manipulations on strings.
//MDN is best resouce for JS documentation. 
//

let isPasswordValid =  function(password){
    return password.length > 8 && !password.includes('password')
}

console.log(isPasswordValid('Vineeshpassword'))

console.log(isPasswordValid('Vineeshpasswrd'))