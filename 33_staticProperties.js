class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`UserName is ${this.username}`)
    }
    static createId() {
        return `123`
    }
}

const chai = new User("sujan")
chai.logMe()

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "suja@gmai.com")
console.log(iphone.logMe());
