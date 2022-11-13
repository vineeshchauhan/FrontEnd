// The Objects can have functions as the value of the property as well. 
// Such property are called Obejct Method.
// Method is nothing but Object propery whose value is a function.
// function inside JS Object can access to  all it's other properties.

let restaurant = {
    name : 'Desi Vibes',
    guestCapacity : 75,
    guestCount : 0,
    seatParty: function(partySize){
        return this.guestCount = this.guestCount + partySize
        },
    removeParty: function (partySize){
        return this.guestCount = this.guestCount - partySize
    },
    checkAvailablity : function(partySize){
        let currentAavalability = this.guestCapacity - this.guestCount
        return currentAavalability >=  partySize 
    }    
}

console.log(restaurant.seatParty(60))
console.log(restaurant.seatParty(15))
console.log(restaurant.checkAvailablity(15))
console.log(restaurant.removeParty(2))
console.log(restaurant.checkAvailablity(15))
console.log(restaurant.removeParty(13))
console.log(restaurant.checkAvailablity(15))

//console is object and log is it's method