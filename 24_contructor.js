// const promiseOne = new Promise()
// const date = new date()

function User(username, loginCount, isloggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.islogggedIn = isloggedIn;
    return this;
}

const userOne = User("sujan", 12, true)
console.log(userOne);