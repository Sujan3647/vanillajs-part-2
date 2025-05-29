class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }

    get password() {
        return `${this._password}sujan`
    }

    set password(value) {
        this._password = value
    }
}

// Now create the instance and log the password
const sujan = new User("contact@sujan.ai", "122")
console.log(sujan.password);  // Output: 122sujan

console.log(sujan.email);
