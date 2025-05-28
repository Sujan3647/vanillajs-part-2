function setUserName(username) {
    this.username = username
    console.log(this);

}


function createUser(username, email, password) {
    setUserName.call(this, username)
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@g.com", "113")
console.log(chai);

// call method -- current execution onno jon se pass koira dei

