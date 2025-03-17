//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	set name(value){
		this.name=name;
	}
	get name(){
		return this.name;
	}
	set age(value){
		this.age=age;
	}
	get age(){
		return this.age;
	}
}

class Student extends Person {
	study(){
		console.log(this.name+" is studying");
	}
}

class Teacher extends Person {
	teach(){
		console.log(this.name+" is teaching");
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
