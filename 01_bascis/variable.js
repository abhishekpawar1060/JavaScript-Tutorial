const accountId = 12234
let accountEmail = "abh@gmail.com"
var accountPassword = "1234"
accountCity = "Mumbai"
let accountState;

accountEmail = "hc@gmail.com"
accountPassword = "145"
accountCity = "Delhi"

// accountId = 2  -> Not allowed

console.log(accountId)

/*
Prefer Not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])