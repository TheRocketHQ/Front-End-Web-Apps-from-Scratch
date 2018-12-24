const menu = {
	_courses: {
    _appetizers: [],
    _mains: [],
    _desserts: []
  },
  set mains(mainsIn) {
		this._mains = mainsIn;
  },
  set desserts(dessertsIn) {
		this._desserts = dessertsIn;
  },
  get courses(){
    return {
      appetizers: this._courses._appetizers,
      mains: this._courses._mains,
      desserts: this._courses._desserts;
    }
  },
  get appetizers() {
		
  },
  set appetizers(appetizerIn) {

  },
  get mains() {

  },
  get desserts() {

  },

  addDishToCourse (courseName, dishName, dishPrice){
    const dish = {
      courseName,
      dishName,
      dishPrice
    };
    this._courses[courseName].push(dish);
    this._courses[dishName].push(dish);
    this._courses[dishPrice].push(dish);
  },
  getRandomDishFromCourse (courseName) {
		const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
  }
};