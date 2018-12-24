let menu = {
    // creating 3 course properties
    _courses: {
        _appetizers: [],
        _mains: [],
        _desserts: [],

        // a setter and getter method for each course property which returns an object with properties for each course
        set appetizers(newAppetizer) {
            this._appetizers = newAppetizer;
        },
        get appetizers() {
            return this._appetizers;
        },
        set mains(newMain) {
            this._mains = newMain;
        },
        get mains() {
            return this._mains;
        },
        set desserts(newDessert) {
            this._desserts = newDessert;
        },
        get desserts() {
            return this._desserts;
        },
        // a getter method for each course
        get courses() {
            return {
                appetizers: this._courses._appetizers,
                mains: this._courses._mains,
                desserts: this._courses._desserts
            }
        }
    }, //end of course object

    // a method which will be used to add a new dish to the specified course
    addDishToCourse(courseName, dishName, dishPrice) {
        let dish = {
            name: dishName,
            price: dishPrice
        };
        this._courses[courseName].push(dish);
    },

    // a function to get a random dish from the menu to generate a random meal
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },

    // a function to automatically generate a random meal
    generateRandomMeal() {
        let appetizer = this.getRandomDishFromCourse('appetizers');
        let main = this.getRandomDishFromCourse('mains');
        let dessert = this.getRandomDishFromCourse('desserts');
        let totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The total price is ${totalPrice}.`;
    }
}