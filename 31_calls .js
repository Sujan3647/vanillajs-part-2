function User(username, email, password) {
    this.username = username
    this.email = email
    this.password = password

}

User.prototype.encryptPassword = function () {
    return `1212CGDS ${this.password}TDGCBXX`
}
const chai = new User("chai", "suj@gamil.com", "TUIFGJ")

console.log(chai.encryptPassword());

