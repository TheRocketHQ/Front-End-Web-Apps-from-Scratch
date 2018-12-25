class Media {
    constructor (title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title (){
        return this._title;
    }
    get isCheckedOut (){
        return this._isCheckedOut;
    }
    get ratings (){
        return this._ratings;
    }

    set isCheckedOut (value) {
        this._isCheckedOut = value;
    }

    toggleCheckedOutStatus(){
        this.isCheckedOut = !this.isCheckedOut;
    }

    getAverageRating(){
        let ratingsSum = this.ratings.reduce((accumulator, rating) => accumulator + rating);
        return ratingsSum/this.ratings.length;
    }

    addRating(value){
        this.ratings.push(value);
    }
}

class Book extends Media {
    constructor(author, title, pages){
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author(){
        return this._author;
    } 
    get pages(){
        return this._pages;
    }
}

class Movie extends Media {
    constructor(director, title, runtime){
        super(title);
        this._director = director;
        this._runtime = runtime; 
    }
}

const historyOfEverything = new Book('Bill Bryson', 'A story of nearly Everything', 544);
historyOfEverything.toggleCheckedOutStatus();
console.log(historyOfEverything);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(6);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckedOutStatus();
console.log(speed.isCheckedOut());
speed.addRating(1);
speed.addRating(5);
speed.addRating(1);
console.log(speed.getAverageRating());




















