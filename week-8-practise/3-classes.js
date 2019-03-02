*/

class House {
  constructor(windows, colour) {
    this.windows = windows
  constructor(windows, colour, numberOfRooms, location) {
    this.windows = windows;
    this.colour = colour || "white";
    this.numberOfRooms = numberOfRooms || 0;
    this.location = location;
  }
  static convertSqrfeetToSqrmeters(sqrfeetValue) {
    let sqrmetersValue = (sqrfeetValue / 10.764).toFixed(2)
    return `${sqrfeetValue} square feet = ${sqrmetersValue} square meters.`
  }
  calculateMonthlyEnergyBill() {
    let base = 40;// base energy bill without windows
    let multiplier = 1.2; // energy bill expected to go up 20% for each additional window
    return base * Math.pow(multiplier, this.windows);
  }
  //getter that return calcalculateMonthlyEnergyBill() output,
  get monthlyEnergyBill() {
    return this.calculateMonthlyEnergyBill();
  }
  calculateHousePrice() {
    let base = 50000;// base haouse price outside London
    let londonFactor = 1.8; //the value of the houses based in London is expected to increase by 80%
    let price = base + (10000 * this.numberOfRooms)// house prices out of London
    if (this.location === "London") {
      price = price * londonFactor; // house prices in London increases by london factor
    }
    return price;
  }
  // getter that return calculateHousePrice() output
  get housePrice() {
    return this.calculateHousePrice();
  }
}

  monthlyEnergyBill(windows) {
    let base = 40 // base energy bill without windows
    let multiplier = 1.2 // energy bill expected to go up 20% for each additional window

    return base + windows*multiplier
// function that compares house prices and monthly energy bills
function compare(firstHouse, secondHouse, valueToCompare) {
  if (firstHouse[valueToCompare] > secondHouse[valueToCompare]) {
    return `${valueToCompare} of ${firstHouse.colour} house is more than ${secondHouse.colour} house`;
  } else if (firstHouse[valueToCompare] < secondHouse[valueToCompare]) {
    return `${valueToCompare} of ${secondHouse.colour} house is more than ${firstHouse.colour} house`;
  } else {
    return `${valueToCompare} of ${firstHouse.colour} house and ${secondHouse.colour} house is equal`;
  }
}

//instances of blue and brown houses
const blueHouse = new House(5, "blue", 2, "London");
const brownHouse = new House(3, "brown", 2, "Woking");
console.log(compare(blueHouse, brownHouse, "housePrice"));// comparing house prices
console.log(compare(blueHouse, brownHouse, "monthlyEnergyBill"));// comparing monthly energy bills
// Static methods are called on the class, but not on instances of the class.
// Because of the static keyword, we can only access convertSqrfeetToSqrmeters() by appending it to the `House` class.
// We cannot access the convertSqrfeetToSqrmeters() method from instances of the `House` class.
// if we try to access convertSqrfeetToSqrmeters() method from instances of the `House` class we get TyprError.
console.log(House.convertSqrfeetToSqrmeters(950)); //converting square feet to square meter with static function

//console.log(blueHouse.monthlyEnergyBill, brownHouse.monthlyEnergyBill);
//console.log(brownHouse.housePrice, blueHouse.housePrice); 