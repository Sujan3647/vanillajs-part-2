class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`USERNAME is ${this.username}`);

    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }
    addCourse() {
        console.log(`A new course was added by ${this.username}`);

    }
}
const chai = new Teacher("chai", "sujan@gamil.com", "hdgs")
chai.addCourse()

const masalachai = new User("masala")
masalachai.logMe()

console.log(chai === masalachai);

console.log(chai instanceof Teacher);


