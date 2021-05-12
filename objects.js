function laptop(os, windowManager, year) {
    this.os = os;
    this.windowManager = windowManager;
    this.year = year;
}

var myLaptop = new laptop("Arch", "i3wm", 2018);
console.log(myLaptop)

var myCar = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    detallesDelAuto: function() {
        return `Auto ${this.model} ${this.year}`;
    }
};

console.log(myCar.detallesDelAuto())