// object literal

const user = {
    username: "sujan",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function () {
        // console.log("got  users deatils from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);




    }
}
console.log(user.username);
console.log(user.getUserDetails());
console.log(this);

