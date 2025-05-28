// ES6 er porer syntax oi user kortasi amra


class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword() {
        return `1212CGDS ${this.password}TDGCBXX`
    }
    changeUserName() {
        return `${this.username}`.toUpperCase()
    }
}
const chai = new User("chai", "suj@gamil.com", "TUIFGJ")

console.log(chai.encryptPassword());
console.log(chai.changeUserName());


// behind the scene


