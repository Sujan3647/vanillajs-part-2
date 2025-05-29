const descripter = Object.getOwnPropertyDescriptor(Math, 'PI')

console.log(descripter);

console.log(Math.floor(Math.PI));


const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,
    orderchai: function () {
        console.log("chai nahi hai");

    }
}
console.log(chai);


console.log(Object.getOwnPropertyDescriptor(chai, 'name'));


Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

for (let [key, value] of Object.entries(chai)) {

    if (typeof value != 'function') {
        console.log(`${key} : ${value}`);
    }



}


