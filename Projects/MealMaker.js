const menu = {
  _courses = {
   appetisers: [],
   mains: [],
   desserts: []
	},
  get courses () {
    return {
      appetisers: this._courses.appetisers,
      mains: this._courses.mains,
      appetisers: this._courses.appetisers;
    }
  },
  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      courseName,
      dishName,
      dishPrice
    };
    this._courses[courseName].push(dish)
  },
  getRandomDishFromCourse (courseName){
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
  }
}
