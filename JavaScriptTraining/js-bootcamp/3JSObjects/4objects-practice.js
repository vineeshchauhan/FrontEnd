let myAccount = {
    id : 0,
    expense : 0,
    income : 0
}

let addExpenses = function (account,expense) {
    account.expense = account.expense + expense
}

let addIncome = function (account, income) {
    account.income = account.income + income
}

let getAccountSummary = function(account) {
    return `Account ${account.id} has $${account.income - account.expense}. $${account.income} in Income. $${account.expense} in Expense` 
}

addExpenses(myAccount,10)
addIncome(myAccount,100)
addExpenses(myAccount,20)
console.log(getAccountSummary(myAccount))
