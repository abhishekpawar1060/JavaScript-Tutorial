function SetUsername(username){
    this.username = username;
    console.log("called");

}

function createUser(username, email, password){
    SetUsername.call(this,username);

    this.email = email;
    this.password = password;
}

const user1 = new createUser("Abhi", "abhi@gmail.com", 1234);

console.log(user1);