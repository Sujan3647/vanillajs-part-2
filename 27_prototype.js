let myHeros = ['thor', 'spiderman']

let heroPower = {
    thor: 'hamer',
    spiderman: 'sling',

    getSpiderPower: function () {
        console.log(`spidy is ${this.spiderman}`)

    }


}
Object.prototype.sujan = function () {
    console.log(`sujan is present in all object`)

}


Array.prototype.heySujan = function () {
    console.log(`Sujan say hello`)
}


myHeros.sujan()
myHeros.heySujan()

heroPower.heySujan()