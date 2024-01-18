/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Car" (naudokite ES6), kuri sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
make, model
Privati savybė:
horsepower
Metodas: 
isPowerful() - jeigu automobilio horsepower bus didesnis nei 300, tada grąžins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */
class Car {
    constructor(make, model, horsepower) {
      this.make = make;
      this.model = model;
      this._horsepower = horsepower;
    }
  
    get horsepower() {
      return this._horsepower;
    }
  
    set horsepower(value) {
      if (value > 0) {
        this._horsepower = value;
      } else {
        console.log("Invalid horsepower value.");
      }
    }
  
    isPowerful() {
      if (this._horsepower > 300) {
        return true;
      } else {
        return false;
      }
    }
  }

// Test
const car1 = new Car('Toyota', 'Corolla', 150);
const car2 = new Car('Dodge', 'Charger', 370);

console.log(car1.isPowerful()); // Rezultatas: false
console.log(car2.isPowerful()); // Rezultatas: true