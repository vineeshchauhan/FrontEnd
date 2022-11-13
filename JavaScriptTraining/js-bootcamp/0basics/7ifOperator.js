let isAccountLocked = false
let userRole = 'Admin'

if ( isAccountLocked ){
    console.log('Is Account locked :'+isAccountLocked);
}else if(userRole === 'Admin'){
    console.log('Welcome to your Account : '+userRole);
}else{
    console.log(' Welcome to your Account');
}