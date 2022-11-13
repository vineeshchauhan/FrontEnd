//JS object can have property and method(property which are basically function)
//How can I be confuse in assignment(=) and propery(:)
const account = {
    name : 'Vineesh Chauhan',
    expenses : [],
    incomes : [],
    addExpense : function(des,amount){
    this.expenses.push({
        description : des,
        amount : amount
    })
    },
    addIncome : function(des,amount){
        this.incomes.push({
            description : des,
            amount : amount
        })
    },
    getAccountSummary :  function(){
    let totalExpenses = 0
    this.expenses.forEach(function(item){
        totalExpenses = totalExpenses + item.amount
    })
    let totalIncome = 0
    this.incomes.forEach(function(item){
        totalIncome = totalIncome + item.amount
    })
    return `${account.name} has $${totalIncome - totalExpenses}. Income is $${totalIncome}. Expense is $${totalExpenses}.`
}
}
account.addIncome('Salary',500)
account.addIncome('Online Content',500)

account.addExpense('Breakfat',100)
account.addExpense('Lunch',200)
account.addExpense('Dinner',300)
console.log(account)
console.log(account.getAccountSummary())