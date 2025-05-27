const User = {
    name: 'sujan',
    email: "sujan@gmail.com"
}

const teacher = {
    makeVedio: true
}

const TeachingSupport = {
    isaVailbale: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fulltime: true,
    __proto__: TeachingSupport
}

teacher.__proto__ = User

//Modern Syntax\

let anotherUsername = "chaiaurCode"

Object.setPrototypeOf(TeachingSupport, Teacher)

String.prototype.truelength = function () {
    console.log(`${this}`);
    console.log(`{this.name}`)
    console.log(`True length is : ${this.trim().length}`)



}
anotherUsername.truelength()