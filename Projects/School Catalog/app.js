class School {
    constructor(name, level, numberOfStudents){
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }
    
    get name(){
        return this._name;
    }

    get level(){
        return this._level;
    }

    get numberOfStudents(){
        return this._numberOfStudents;
    }

    set numberOfStudents(value){
        if(value.isNan()){
            console.log('Invalid Input: numberOfStudents must be a number.');
        }
        else{
            this._numberOfStudents = value;
        }
    }

    quickFacts(){
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }

    static pickSubTeacher (substituteTeachers){
        const randInt = Math.floor(Math.random()* substituteTeachers.length);
        return substituteTeachers[randInt];
    }
}